import React, { useState, useEffect, useRef } from 'react';
import { IoMdDownload } from "react-icons/io";
import Nav from './Nav';
import img1 from '../images/bgs.png';
import pdflink from '../images/Resume_Janvee.pdf';
import Footer from './Footer';
import Extratext from './Extratext';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const downloadBtnRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  function handledelay(event) {
    event.preventDefault();
    const btn = downloadBtnRef.current;
    const href = event.currentTarget.href;
    if (btn) btn.disabled = true;

    setTimeout(() => {
      if (btn) btn.disabled = false;
      // open in new tab
      window.open(href, '_blank', 'noopener,noreferrer');
    }, 2000);
  }

  if (loading) {
    // simple CSS spinner fallback — no extra dependency
    return (
      <div className="loader" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'60vh'}}>
        <div style={{
          width:48, height:48, borderRadius:24,
          border: '6px solid rgba(0,0,0,0.1)',
          borderTopColor: '#00008B',
          animation: 'spin 1s linear infinite'
        }} />
        <style>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi!</h1>
          <h1>I'M <b>Janvee Sharma</b></h1>
          <Extratext />
          <a
            href={pdflink}
            className='dr'
            rel='noreferrer'
            target='_blank'
            download="Janvee Resume"
            onClick={handledelay}
          >
            <button ref={downloadBtnRef} className='dra'><IoMdDownload /> Download Resume</button>
          </a>
        </div>

        <div className="img-cont">
          <img src={img1} alt="noimg" className='img1' />
        </div>
      </div>

      <div className="brief">
        <div className="intro">
          <h1>About Me</h1>
          <p>
            Hi, My name is <b>Janvee Sharma</b> I am from Bihar.
            I am currently pursuing Master of Computer Application from <b>Vivekananda Global University Jaipur</b>.<br />
            I have developed technical skills in Java, HTML, CSS, JavaScript, Data Structure and Algorithms, and I am
            particularly passionate about web development. I have worked on projects like e-commerce, Movie_ticket_booking.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;