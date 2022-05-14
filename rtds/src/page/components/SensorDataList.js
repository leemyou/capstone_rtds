import React, { useState } from "react";

const SensorDataList = ({ totalInfos }) => {



    return(
        <>
            {totalInfos.map(totalInfos => {
                return(
                <div key={totalInfos.time}>
                    {totalInfos.status}
                </div>
                
                )
            })}
            {/* {totalInfos.map(totalInfos =>{
                return(
                    <div key={totalInfos.time}>
                    {totalInfos.time}
                    </div>
                )
            })} */}
            
            
        </>
    )
}
export default SensorDataList;