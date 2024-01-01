import './App.css';
//import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './pages/Game';
import Admin from './pages/Admin';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/game' element={<Game />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;