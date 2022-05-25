import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SensorDataList from './SensorDataList';
import { Button } from 'react-bootstrap';


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
            <h1>데이터 불러오기!!@</h1>
            <form onSubmit={() => totalInfos}>
                <Button type = 'submit' variant="primary">Primary</Button>{' '}
            </form>
            <SensorDataList totalInfos={totalInfos}/>

        </>
    )
}

export default SensorInfo;