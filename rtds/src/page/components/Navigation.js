import React, { useState } from "react";
import { Link } from 'react-router-dom';

import '../../css/navStyle.css';


function Navigation() {

    var manager = '임효현';
    var [isClick, setClick] = useState("");

    return(
        <div className="Navi">
            <h1>RTDS</h1>
            <hr></hr>
            <h4>관리자 { manager }님 <br/> 환영합니다!</h4>
            <hr></hr>

            <Link to="/sensor_location">
                <button id="산불감지현황" onClick={(e) => {setClick(e.target); console.log(isClick)}}
                    className={isClick === "<p>산불감지 현황</p>" ? "btn_clicked" : "btn_nav"}>
                    <ion-icon name="flame-outline" id="icon"></ion-icon>
                    <p>산불감지 현황</p>
                </button><br/>
            </Link>
            <Link to="/sensor_info">
                <button id='산불감지센서정보'  onClick={(e) => {setClick(e.target); console.log(isClick)}}
                className={isClick === "<p>산불감지 센서 정보</p>" ? "btn_clicked" : "btn_nav"}>
                    <ion-icon name="search-circle-outline" id="icon"></ion-icon>
                    <p>산불감지 센서 정보</p>
                </button><br/>
            </Link>
            <Link to="/victim">
                <button id='조난자위치조회'  onClick={(e) => {setClick(e.target); console.log(isClick)}}
                className={isClick === "<p>조난자 위치 조회</p>" ? "btn_clicked" : "btn_nav"}>
                    <ion-icon name="location-outline" id="icon"></ion-icon>
                    <p>조난자 위치 조회</p>
                </button><br/>
            </Link>

            <Link to="/device">
                <button id='조난자정보등록'  onClick={(e) => {setClick(e.target); console.log(isClick)}}
                className={isClick === "<p>조난자 정보 등록</p>" ? "btn_clicked" : "btn_nav"}>
                    <ion-icon name="person-add-outline" id="icon"></ion-icon>
                    <p>조난자 정보 등록</p>
                </button><br/>
            </Link> 


        </div>
    );
}

export default Navigation;