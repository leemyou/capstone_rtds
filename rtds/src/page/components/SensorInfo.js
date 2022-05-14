import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SensorDataList from './SensorDataList';


function SensorInfo() {
    const [totalInfos, setTotalInfos] = useState([]);


    useEffect(() => {
        setTotalInfos([]);
            
            const response = axios.get('http://localhost:2999/sensor_info')
            .then(response => {
                console.log(response.data);
                setTotalInfos(response.data);
            })
            console.log('fetch information');
    }, []);



    return(
        <>
            <h1>데이터 불러오기!</h1>
            <form onSubmit={ totalInfos}>
                <button type = 'submit'>콘솔창에 찍어보기</button>
            </form>
            <SensorDataList totalInfos={totalInfos}/>
        </>
    )
}

export default SensorInfo;