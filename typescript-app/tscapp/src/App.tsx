import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Homepage/>
       <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
