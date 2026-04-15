import React from 'react'
import { useState, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import Nav from './Nav'
import { FaGithub } from "react-icons/fa";
import link1 from '../images/movie.jpg'
import link2 from '../images/fash.png'
import link3 from '../images/pers.jpg'
import Footer from './Footer';
const Project = () => {
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
      <div className="project_main">
        <h1 className='main_heading'>My Projects</h1>
        <div className="project_container">
          <div className="project_card">
            <div className="img_cont">
              <img src={link1} alt="cineticket" />
            </div>
            <h1>CineTicket</h1>
            <h1>(Online Movie Ticket Booking)</h1>
            <h4>Tech Stack Used: HTML, CSS, JavaScript, Node.js, Express.js, MongoDB</h4>
            <h3>Description:</h3>
            <p>Created a web application for online movie ticket booking using the MERN stack. The
              application contains three pages: login/register, a home page, and a ticket booking interface.
              The home page features popular movies, services, and contact sections.
            </p>
            <a href="https://movie-ticket-booking-blush.vercel.app/" className='git' target="_blank" rel="noopener noreferrer"><button className='gb'>Project Link: <FaGithub /></button></a>
          </div>
          <div className="project_card">
            <div className="img_cont">
              <img src={link2} alt="fashionhub" />
            </div>
            <h1>Fashionhub </h1>
            <h1>(An E-Commerce App)</h1>
            <h4>Tech Stack Used: HTML, CSS, Node.js, MongoDB, EJS</h4>
            <h3>Description:</h3>
            <p>Developed an e-commerce platform using the MERN stack. Utilized EJS for the front-end structure,
              vanilla CSS for styling, and MongoDB for database management. Features include secure
              user authentication and product browsing.
            </p>
            <a href="https://github.com/janvee933/Porfolio" className='git' target="_blank" rel="noopener noreferrer"><button className='gb'>Github Link: <FaGithub /></button></a>
          </div>
          <div className="project_card">
            <div className="img_cont">
              <img src={link3} alt="portfolio" />
            </div>
            <h1>Personal Portfolio</h1>
            <h4>Tech Stack Used: HTML, CSS, JavaScript, React.js</h4>
            <h3>Description:</h3>
            <p>Built this personal portfolio website using React.js to showcase my skills and projects.
              Features responsive design, project cards, and smooth navigation. Hosted on Vercel for
              high performance and availability.
            </p>
            <a href="https://janvee933.github.io/Portfolio/" className='git' target="_blank" rel="noopener noreferrer"><button className='gb'>Github Link: <FaGithub /></button></a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Project;