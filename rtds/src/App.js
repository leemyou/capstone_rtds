import Login from './page/Login';
import Home from './page/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// 테스트
import Test from './test/Hello'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
