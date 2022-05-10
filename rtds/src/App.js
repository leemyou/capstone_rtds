// import Login from './page/Login';
import React from 'react';
import SensorLoc from './page/components/SensorLoc';
import SensorInfo from './page/components/SensorInfo';
import DeviceInsert from './page/components/DeviceInsert';
import Victim from './page/components/Victim';
import Navigation from './page/components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <Navigation />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/sensor_loc" element={<SensorLoc />} />
            <Route path="/victim" element={<Victim />} />
            <Route path="/sensor_info" element={<SensorInfo />} />
            <Route path="/device_insert" element={<DeviceInsert />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
