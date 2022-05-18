import React, {Component, useState} from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import 조난자위치조회 from "./components/Victim";
import 산불감지현황 from "./components/SensorLoc";
import 센서정보조회 from "./components/SensorInfo";
import 디바이스등록 from "./components/DeviceInsert";
import 로그인 from "./Login";

import Navigation from "./components/Navigation";
import '../App.css';


function Home() {

  return (
    <div className="App">
      <Router>
      <header>
        <Navigation />
      </header>
      <main>

        <Routes>
          <Route path="/Home/Sensor_location" element={<산불감지현황 />} />;
          <Route path="/Home/victim" element={<조난자위치조회 />} />;
          <Route path="/Home/sensor_info" element={<센서정보조회 />} />;
          <Route path="/Home/device" element={<디바이스등록 />} />;
          <Route path='/' element={<로그인 />} />;
        </Routes>


        
      </main>
      </Router>
      
    </div>

  );
}

export default Home;
