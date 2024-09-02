"use client";
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import LandingPage from './components/LandingPage'
import MultipleUserForms from './components/MultipleUserForms ';

const page = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/about/:place" element={<AboutPage />} />
      <Route path="/form" element={<MultipleUserForms />} />
    </Routes>
  </Router>
  )
}

export default page