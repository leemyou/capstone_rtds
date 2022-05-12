import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


function SensorInfo() {

    function getList() {
        let reqOption = {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            }
        }
        fetch("/sensor_info", reqOption).then((res) => res.json())
            .then(data => console.log(data));
    }
    getList();

    return(
        <div className="contents">
        
        </div>
    )


    // onCall = () => {
    //     fetch("/sensor_info", reqOption).then((res) => res.json())
    //         .then(data => console.log(data));
    //     .then((res)=>res.json())
    //     .then((json)=>{
    //         if(json === undefined){
    //             alert('오류!')
    //         }else{
    //             // 가져온 json을 길이만큼 for문
    //             for(let i=0; i<json.length; i++){
    //                 this.setState({
    //                     //배열을 이어붙이려면 concat
    //                     list: this.state.list.concat(
    //                         createData(
    //                             json[i].time, 
    //                             json[i].status, 
    //                         )
    //                     ),
    //                 });
    //             }
    //             console.log(json);
    //         }
    //     });
    // }







//인터페이스
    // render() {
    //     const content = this.state.list.map((list) => (
    //         <div key={list.index}>
    //             <div>
    //                 <h4>{list.time}</h4>
    //                 <h4>{list.status}</h4>
    //             </div>
    //         </div>
    //     ))
    //     return (
    //         <>
    //             {content}
    //         </>
    //     )
    // }
    
}
export default SensorInfo;