import React from 'react'
import { Link } from 'react-router-dom'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Notfound = () => {
  return (
    <div>
        <section className="notFound">
          <div className="container">
            <img src="/notFound.svg" alt="notFound" />
            <h1>Looks Like You Are Lost!</h1>
            <p>We Can't Found The Page You Are Looking For</p>
            <Link to={"/"}>Back to Home <span>
              <HiArrowNarrowRight/>
              </span></Link>
          </div>
        </section>
    </div>
  )
}

export default Notfound