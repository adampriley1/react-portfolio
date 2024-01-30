// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import * as bootstrap from 'bootstrap';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProjectsGallery from './pages/ProjectsGallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Project from './components/Project'
import ProjectMore from './components/ProjectMore'


function App() {
  return <Router>
  <Header />
  <NavBar />
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects-gallery" element={<ProjectsGallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects-gallery/:id" element={<ProjectMore />} />
  </Routes>
  <Footer />
</Router>;

}

export default App
