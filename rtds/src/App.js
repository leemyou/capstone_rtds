import React, {Component} from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import 조난자위치조회 from "./page/components/Victim";
import 산불감지현황 from "./page/components/SensorLoc";
import 센서정보조회 from "./page/components/SensorInfo";
import 디바이스등록 from "./page/components/DeviceInsert";
import Home from "./page/Home";
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
          <Route path="/" element={<산불감지현황 />} />;
          <Route path="/victim" element={<조난자위치조회 />} />;
          <Route path="/sensor_info" element={<센서정보조회 />} />;
          <Route path="/device" element={<디바이스등록 />} />;
        </Routes>
      </main>
      </Router>
    </div>

  );
}

export default App;
