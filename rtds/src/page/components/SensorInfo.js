import axios from 'axios';
import React, { useEffect, useState } from 'react';
// datepicker
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; 	// 데이트 피커 스타일
import format from 'date-fns/format'

import SensorDataList from './SensorDataList';

import { DropdownButton, Dropdown } from 'react-bootstrap';
import styles from '../../css/datePickerStyle.module.css'


function SensorInfo() {
    const [totalInfos, setTotalInfos] = useState([]);
    //날짜 시간 변하는 state
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    // datepicker 열렸는지 체크
    const [isOpen, setIsOpen] = useState(false);
    
    var date = format(startDate, "yyyy-MM-dd"); //String 타입
    var start = date + " " + startTime;
    var end = date + " " + endTime;

    
    // datepicker 버튼 날짜 바뀌는 이벤트   
    const handleChange = (e) => {
      setIsOpen(!isOpen);
      setStartDate(e);
    };
    
    // datepicker open event
    const handleClick = (e) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };

    const timeChange = () => {
        setStartTime(document.getElementById("startTime").value);
        setEndTime(document.getElementById("endTime").value);
        // console.log(startTime);
        console.log(start);
        console.log(end);
    }

    // 시간 데이터 가져오기
    const onClick = () => {
        //입력받은 값 검정 해야함
        setStartTime(document.getElementById("startTime").value);
        setEndTime(document.getElementById("endTime").value);
    }


    useEffect(() => {
        setTotalInfos([]);
            const response = axios.get('http://localhost:2999/sensor_info',{
                //파라미터 값으로 날짜를 넘겨준다
                params: { 
                    start_t : start,
                    end_t : end
                }
            })
            .then(response => {
                setTotalInfos(response.data);
                console.log(start);
            })
            .catch(err => {
                console.error(err);
            })
            console.log('fetch information');
    }, []);



    
    return(
        <>
            <h1 className="title">산불감지 센서 정보</h1>
            <p className={styles.sub_title}>날짜 및 시간을 선택해주세요</p>

            {/* datepicker */}
            <div className={styles.Picker}>
                <button className={styles.Date} onClick={handleClick}>
                    {format(startDate, "yyyy-MM-dd")}
                </button>


            
            {/* timePicker */}
            <div className={styles.TimePicker}>
                <input type="time" id='startTime' onChange={timeChange}/>
                <h4 style={{fontWeight: "bold"}}>~</h4>
                <input type="time" id='endTime'onChange={timeChange}/>
            </div>
            

            <form onSubmit={() => totalInfos}>
                <button type="submit"className={styles.BtnCheck} onClick={onClick}>정보확인</button>
            </form>
            </div>
            
            <h1>{ start } ~ { end }</h1>
            <h1>{ date }</h1>
        
        {/* 데이트 피커 */}
            {isOpen && (
                <DatePicker selected={startDate} onChange={handleChange} inline />
            )}
            
            
            <SensorDataList totalInfos={totalInfos}/>

        </>
    )
}

export default SensorInfo;