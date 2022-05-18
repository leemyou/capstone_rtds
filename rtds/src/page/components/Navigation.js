import React from "react";
import { Link, BrowserRouter } from 'react-router-dom';

import navStyle from'../../css/navStyle.css';


function Navigation() {

    var manager = '임효현';

    return(
        <div className="Navi">
            <h1>RTDS</h1>
            <hr></hr>
            <h4>관리자 { manager }님 <br/> 환영합니다!</h4>
            <hr></hr>

            <Link to="/sensor_location">
                <button class="btn_nav">
                    <ion-icon name="flame-outline" id="icon"></ion-icon>
                    <p>산불 감지 현황</p>
                </button><br/>
            </Link>
            <Link to="/victim">
                <button class="btn_nav">
                    <ion-icon name="location-outline" id="icon"></ion-icon>
                    <p>조난자 위치 조회</p>
                </button><br/>
            </Link>
            <Link to="/sensor_info">
                <button class="btn_nav">
                    <ion-icon name="search-circle-outline" id="icon"></ion-icon>
                    <p>센서 정보 조회</p>
                </button><br/>
            </Link>
            <Link to="/device">
                <button class="btn_nav">
                    <ion-icon name="person-add-outline" id="icon"></ion-icon>
                    <p>디바이스 등록</p>
                </button><br/>
            </Link> 
            <Link to="/">
                <button className='btn_logout' href='.../Login.html'>
                <ion-icon name="log-out-outline" id='icon'></ion-icon>
                    <p>로그아웃</p>
                </button><br/>
            </Link>

        </div>
    );
}

export default Navigation;