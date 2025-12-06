import React, { useState, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import { Extratext } from './Extratext';
import { IoMdDownload } from "react-icons/io";
import Nav from './Nav';
import img1 from '../images/bgs.png'
import pdflink from '../images/Resume_Janvee.pdf'
import Footer from './Footer';
const Home = () => {
    function handledelay(event) {
        event.preventDefault();
        const button = document.querySelector('.dra');
        const link = event.currentTarget;
        button.disabled = true;
        setTimeout(() => {
            button.disabled = false;
            window.open(link.href, '_blank', 'noopener');
        }, 2000);
    }


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
            <div className='HomePage'>

                <div className='HomeText'>
                    <h1>Hi!</h1>
                    <h1>I'M <b>Janvee Sharma</b></h1>
                    <Extratext />
                    <a href={pdflink} className='dr' rel='noreferrer' target='_blank' download="Janvee Resume" onClick={handledelay}><button className='dra'><IoMdDownload /> Download Resume</button></a>
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
                        I have developed technical skills in Java, HTML, CSS, JavaScript,Data Structure and algorithms, and <br></br> I am particularly passionate about web development.<br></br>I have worked on projects like e-commernce, Movie_ticket_booking,
                        <br /><br />

                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;