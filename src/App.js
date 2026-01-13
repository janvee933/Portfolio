import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
<<<<<<< HEAD
function App() {
  return (
    <>
      <Router basename="/Portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
=======

function App() {
  return (
   
    <Router basename={process.env.PUBLIC_URL || '/Porfolio'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

        {}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
>>>>>>> fe712d5a423bcd317decec62a9fa5416c47d7e3f
  );
}

export default App;