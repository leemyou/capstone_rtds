import React, { useState, useEffect } from 'react'
import axios from 'axios';
import moment from 'moment';
import SDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; 	// 데이트 피커 스타일

import SensorDataList from "./SensorDataList";


const DateTest = () => {
    // 시작 날짜 & 시작시간
    const [startDate, setStartDate] = useState(null);
    // 종료 시간
    const [endDate, setEndDate] = useState(null);
    // 시작 시간을 선택했는지
    const [isSelected, setIsSelected] = useState(false);

    // 데이터를 담을 객체
    const [totalInfos, setTotalInfos] = useState(null);

    // 시작 시간이 선택되면 해당 시간 적용 및 isSelected를 true, endTime을 null로
    const onSelect = (date) => {
        setStartDate(date);
        setIsSelected(true);
        setEndDate(null);
    };

    var start_t = moment(startDate).format("YYYY-MM-DD HH:mm:ss");
    var end_t = moment(endDate).format("YYYY-MM-DD HH:mm:ss");

    const onSubmit = (e) => {
        e.defaultPrevented = true;
        alert(start_t);
        alert(end_t);

    }
    
    const fetchDateTime = async() => {
        setTotalInfos([]);
        const response = axios.post('http://localhost:2999/sensor_info', {
            start_t: start_t,
            end_t: end_t
        })
        .then(response => {
            setTotalInfos(response.data);
            // console.log(response);
            if(response.data = []){
               alert("데이터가 없습니다")
            }
        })
        .catch(err => {
            console.log(err);
        })
        console.log('fetch information');
    }
    useEffect(() => {
        fetchDateTime();
    }, []);



    return (
        <>
        <form onSubmit={ onSubmit }>  {/*submit함수 넣어야함 */}
            {/* 첫번째 데이트피커 */}
            <div><SDatePicker
                selected = { startDate }
                onChange = { onSelect }
                showTimeSelect
                selectsStart
                timeIntervals={1}
                timeCaption="Time"
                dateFormat="yyyy년 MM월 dd일 hh:mm 시작"
                placeholderText="시작 시간"
                className="mt-4"
            /></div>

            {/* 두번째 데이트피커 */}
            {isSelected ? // 시작 시간을 선택해야 종료 시간 선택 가능
                <div><SDatePicker
                selected={endDate}
                onChange={(time) => setEndDate(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={1}
                selectsEnd
                startDate={startDate}
                minTime={ startDate }
                maxTime={ startDate.getMinutes() +1 } // 시작 시간부터 8시간
                excludeTimes={[
                    // 시작 시간 제외
                    startDate,
                ]}
                timeCaption="Time"
                dateFormat="h:mm 종료"
                placeholderText="종료 시간"
                // className="mt-3"
            /></div>
                : null 
            }

            <button type="submit" className="mt-5">시간 확인 버튼!</button>

            <h1>데이터를 받아오겟읍니다</h1>
            <SensorDataList totalInfos={ totalInfos }/>

        </form>
        </>
    );
};
export default DateTest;