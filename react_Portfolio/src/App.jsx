// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import * as bootstrap from 'bootstrap';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProjectsGallery from './pages/ProjectsGallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return <Router>
  <NavBar />
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects-gallery" element={<ProjectsGallery />} />
      <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer />
</Router>;

}

export default App
