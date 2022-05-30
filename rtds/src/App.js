/* eslint-disable */

import React, {Component, useState} from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import 조난자위치조회 from "./page/components/Victim";
import 산불감지현황 from "./page/components/SensorLoc";
import 센서정보조회 from "./page/components/SensorInfo";
import 디바이스등록 from "./page/components/DeviceInsert";
import Test from "./page/components/DateTest";
import Home from "./page/Home";
import Login from "./page/Login";

import Navigation from "./page/components/Navigation";
import './App.css';


function App() {

  return (
    <div className="App">
      <Router>
      <header>
        <Navigation />
      </header>
      <main>

        <Routes>
          <Route path="/sensor_location" element={<산불감지현황 />} />;
          <Route path="/victim" element={<조난자위치조회 />} />;
          <Route path="/sensor_info" element={<센서정보조회 />} />;
          <Route path="/device" element={<디바이스등록 />} />;
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />;
          <Route path='/' element={<Login />} />;
        </Routes>
        
      </main>
      </Router>
    </div>

  );
  }
export default App;
