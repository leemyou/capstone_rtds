import React from 'react';
// import ReactDOM from 'react-dom';
import Victim from './components/Victim'
import SensorInfo from './components/SensorInfo'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Home() {
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Victim" element={<Victim />} />
            <Route exact path='/SensorInfo' element={<SensorInfo />} />
        </Routes>
    </BrowserRouter>
}

export default Home;