import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Contact} from './pages/Contact';
import {Home} from './pages/Home';
import {Login} from './pages/Login';
import { NavBar } from './components/NavBar';
import {Lesson13} from './pages/Lesson13';
import {Provider} from "react-redux";
import { store } from './store';

function App() {
  

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lesson13" element={<Lesson13 />} />
            
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
