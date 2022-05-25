import React, { useState } from "react";

const SensorDataList = ({ totalInfos }) => {

    // column 입력 (데이터 제목)
    const columnData = [
        { 
            accessor: 'time',
            Header: 'Time',
        },
        {
            accessor: 'status',
            Header: 'Status',
        }
    ]
    const columns = useMemo(() => columnData, []);

    // data 입력
    // key name 과 column의 accessor와 같은 이름으로
    const data = useMemo(() => [{
        "time" : "2022-04-06 05:10:00",
        "status" : "safe",
    }])

    // 객체 내 object 형태로 넘겨줌
    const [info, setInfo] = useState();

    const getSensorInfo = () => {
        data.getSensorInfo().then(item => setInfo(item));
    };
    
    // const data = useMemo(() => info, [info])



    return(
        <>
            {totalInfos.map(totalInfos => {
                return(
                <div key={totalInfos.time}>
                    { totalInfos.time }
                    <br/>
                    {totalInfos.status}
                    <hr></hr>
                </div>
                
                
                )
            })}
            
            
        </>
    )
}
export default SensorDataList;