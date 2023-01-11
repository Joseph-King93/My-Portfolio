import React from 'react';
import AboutPage from '../AboutPage/AboutPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <NavBar />

      <main className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>  
      </main>
    </div>
  );
}

