import React from "react";
import { Link, BrowserRouter } from 'react-router-dom';

function Navigation() {
    return(
        <>
            <h3>여기에는 네비바가 들어갈 예정~!</h3>
            <BrowserRouter>
                    <Link to="/">
                        <button>산불 감지 현황</button>
                    </Link>
                    <Link to="/victim">
                        <button>조난자 위치 조회</button>
                    </Link>
                    <Link to="/sensor_info">
                        <button>센서 정보 조회</button>
                    </Link>
                    <Link to="/device">
                        <button>디바이스 등록</button>
                    </Link>
            </BrowserRouter>
        </>
    );
}

export default Navigation;