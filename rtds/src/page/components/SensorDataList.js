import React from "react";
import Table from 'react-bootstrap/Table';
import styles from "../../css/Table.module.css";

const SensorDataList = ({ totalInfos }) => {

    // var date = totalInfos.time;
    // var time = totalInfos.time;
    // var status = totalInfos.status;
    // var date = "";
    // var time = "totalInfos.time";
    // var status = "totalInfos.status";


    return(
        <>
            { totalInfos && totalInfos.map(totalInfos => {

                return(
                <div key={totalInfos.time}>
                    {/* 시간: {totalInfos.time}
                    상태 : {totalInfos.status}
                    <br/>
                    <hr/> */}

                    <Table striped bordered hover size="sm"  className={styles.table}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>날짜 / 시간</th>
                            <th>상태</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>상태</td>
                            <td>{totalInfos.time}</td>
                            <td>{totalInfos.status}</td>
                        </tr>
                        <tr>
                        </tr>
                      </tbody>
                    </Table>
                </div>
                
                
                )
            })}
            
            
        </>
    )
}
export default SensorDataList;