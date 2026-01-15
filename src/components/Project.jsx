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
            {/* <h3>Tach Stack Used: html, css, javascript, Node.Js, Express.Js, MongoDB</h3> */}
            <h3>Discription:</h3>
            <p>Created an web application on, online movie ticket booking website using mern stack.Web
              application contain three page, first page for login/register, second page is home page and third page is for
              booking tickets.At home page there are sections for like popular movies, services, contact-us.
              For backend i have used Node.js with express.js framework.
            </p>
            <a href=" " className='git' target="_blank" rel="noopener noreferrer"><button className='gb'>Github Link: <FaGithub /></button></a>
          </div>
          <div className="project_card">
            <div className="img_cont">
              <img src={link2} alt="fashionhub" />
            </div>
            <h1>Fashionhub </h1>
            <h1>(An E-Commerce App)</h1>
            {/* <h3>Tach Stack Used:html, css, javascript, Node.Js,MongoDB</h3> */}
            <h3>Discription:</h3>
            <p>Created an e-commerce app using mern stack.I have used EJS for buliding structure of my
              application, noraml css for styling, for database management i have used mongodb.It contains login/register and
              home page, where user can select product to buy.
            </p>
            <a href="https://github.com/janvee933" className='git' target="_blank" rel="noopener noreferrer"><button className='gb'>Github Link: <FaGithub /></button></a>
          </div>
          <div className="project_card">
            <div className="img_cont">
              <img src={link3} alt="portfolio" />
            </div>
            <h1>Personal Portfolio</h1>
            {/* <h3>Tach Stack Used:html, css, javascript, React.Js</h3> */}
            <h3>Discription:</h3>
            <p>I created a personal portfolio website using HTML, CSS, JavaScript, and React.js, and hosted it on Vercel.
              The Home page includes my introduction and resume, and the site also contains dedicated Projects, Skills, and Contact pages.
              On the Projects page, I have listed my projects in the form of cards, each with a description and a link to the GitHub source code.
            </p>
            <a href="https://github.com/janvee933/Porfolio" className='git' target="_blank" rel="noopener noreferrer"><button className='gb'>Github Link: <FaGithub /></button></a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Project;