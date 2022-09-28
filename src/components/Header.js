import React from 'react'

const Header = () => {
  return (
    <>
    <nav>
    <div className="hero">
    <h2 className = "logo">Port<span>Folio</span></h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Certifications</a></li>
                <li><a href="#">Contact Me</a></li>
            </ul>
            <a href="#" className ="btn">Subscribe</a>

    </div>
    </nav>
    

    </>
  )
}

export default Header