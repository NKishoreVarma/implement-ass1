// src/App.jsx

import React from 'react';
import Home from './Home';
import AddBook from './components/addbook';
import './App.css'; // Import global styles
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook/>} />

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}


export default App;
