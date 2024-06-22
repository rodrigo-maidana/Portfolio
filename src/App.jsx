// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <section id="projects">
          <ProjectList />
        </section>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
