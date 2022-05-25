import React from "react";

const SensorDataList = ({ totalInfos }) => {

    var date = totalInfos.time;
    var time = totalInfos.time;
    var status = totalInfos.status;


    return(
        <>
            {totalInfos.map(totalInfos => {
                date = JSON.stringify(totalInfos.time);
                time = JSON.stringify(totalInfos.time);
                status = totalInfos.status;

                date = date.substring(1,11);
                time = time.substring(12, 20);

                return(
                <div key={totalInfos.time}>
                    날짜 : { date }<br/>
                    시간 : { time }
                    <br/>
                    상태 : { status }
                    <hr></hr>
                </div>
                
                
                )
            })}
            
            
        </>
    )
}
export default SensorDataList;