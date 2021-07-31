import React from 'react'
import {Link} from 'react-router-dom'
import './style.css';

const Home = () => {
    return ( 
    <div className="home">
        <div className="title">
            <h1>
                <p>Hi,</p>
                <p>I am Fardeen</p>
                <p>Software Developer</p>
            </h1>
            <Link to="/about">
                <button>More Info</button>
            </Link>

        </div>
        <div className="person">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="person picture" />
        </div>

    </div>
    )
}

export default Home
