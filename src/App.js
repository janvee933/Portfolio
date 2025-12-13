import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';

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
  );
}

export default App;