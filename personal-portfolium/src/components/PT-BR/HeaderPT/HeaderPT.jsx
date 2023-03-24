import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderPT.css'
import SocialMedia from '../../general/SocialMedia/SocialMedia'
function HeaderPT() {
  return (
    <div>
      <header className='main-content'>
        <h1> Felipe Gerber</h1>
        <div className='link-contents'>
          <Link className="link-element" to="/about-PT">Sobre</Link>
          <Link to="/portfolio-PT">Portforlio</Link>
          <Link to="/contact-PT">Contato</Link>
          <Link to="/knowledge-PT">Conhecimentos</Link>
        </div>
        <SocialMedia />
      </header>
    </div>
  )
}

export default HeaderPT