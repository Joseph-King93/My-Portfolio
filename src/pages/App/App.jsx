import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../AboutPage/AboutPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  return (
    <main className="App">
      <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>  
    </main>
  );
}

