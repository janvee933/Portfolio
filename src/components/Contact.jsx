import React from 'react'
import Nav from './Nav'
import { useState, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import source from '../images/contact.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Footer from './Footer';
const Contact = () => {
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
      <div className="contact_info">
        <div className="info_container">
          <div className="social">
            <p>As i am actively seeking an entry level Full Stack Developer position,
              I would appreciate the opportunity to connect, exchange ideas, and explore potential opportunities. Please feel free to connect with me through my social media links below.
              here are my social media links.
            </p>
            <h1 className='social_logo'>
              <a href="https://www.linkedin.com/in/janvee-sharma-ba9963289"><FaLinkedin color='blue' /></a>
              <a href="https://www.instagram.com/janvee209?igsh=MXJqY2YxOWI2enhkbg=="><FaInstagramSquare color='red' /> </a>
              {/* <a href=""><FaFacebook color='blue'/></a> */}
            </h1>
          </div>
          <div className="social_links"></div>
          <div className="img_conti">
            <img className='me' src={source} alt="me" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;