import React from 'react'
import SocialMedia from '../../general/SocialMedia/SocialMedia'
import { Link } from 'react-router-dom'
import './HeaderPT.css'
import logo from '../../../images/logo.png'
function HeaderPT() {
  return (
    <div>
      <header className='main-content'>
        <img src={logo} alt="logo" width="100px"/>
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