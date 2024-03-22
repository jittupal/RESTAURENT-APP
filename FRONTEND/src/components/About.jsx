import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                <h1 className="heading">ABOUT US</h1>
               <p>The only thing we're serious about is FoOd</p>
                </div>
                <p className="mid">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In magni commodi possimus. 
                    Aliquid dicta accusamus consequuntur velit cumque tempora! Et voluptatem soluta necessitatibus quis iure, 
                    corporis autem mollitia officia odio laudantium sint eum commodi aut ad non cupiditate, 
                    consectetur officiis? Sed, voluptate? Consequuntur ipsum a recusandae libero sed, sequi dolor.
                </p>
                <Link to={"/"}> Exprolore Menu <span>
                   <HiOutlineArrowNarrowRight/> </span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About