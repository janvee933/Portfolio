import React from "react";
import Nav from "./Nav";
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import img1 from '../images/java.png'
import img2 from '../images/js.svg'
import img3 from '../images/nodejs.svg'
import img5 from '../images/react.svg'
import img6 from '../images/mongodb.svg'
import img7 from '../images/html.svg'
import img8 from '../images/css.svg'
import img9 from '../images/exp.png'
import img10 from '../images/mysql.png'
const Skills = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <Bars
          height="80"
          width="80"
          color="#00008B"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  return (
    <>
      <Nav />
      <div className="skills">
        <div className="technical_skills">
          <h1>Technical Skills</h1>
          <div className="tech_logo">
            <div className="cnt"><img src={img1} alt="Java" /></div>
            <div className="cnt"><img src={img7} alt="HTML5" /></div>
            <div className="cnt"><img src={img8} alt="CSS3" /></div>
            <div className="cnt"><img src={img2} alt="JavaScript" /></div>
            <div className="cnt"><img src={img3} alt="Node.js" /></div>
            <div className="cnt"><img src={img9} alt="Express" /></div>
            <div className="cnt"><img src={img5} alt="React" /></div>
            <div className="cnt"><img src={img6} alt="MongoDB" /></div>
            <div className="cnt"><img src={img10} alt="MySQL" /></div>
          </div>
        </div>
        <div className="relevent_coursework">
          <h1>Relevent Coursework</h1>
          <div className="course_list">
            <ul>
              <li>OPERATING SYSTEM</li>
              <li>DATA STRUCTURE & ALGORITHMS</li>
              <li>DATA COMMUNICATION</li>
              <li>DATABASE MANAGEMENT SYSTEM</li>
            </ul>
            <ul>
              <li>OOPS(JAVA)</li>
              <li>COMPUTER NETWORKING</li>
              <li>CRYPTOGRAPHY</li>
              <li>SOFTWARE ENGINEERING</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skills;