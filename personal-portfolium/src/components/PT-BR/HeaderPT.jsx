import React from 'react'
import { Link } from 'react-router-dom'
function HeaderPT() {
  return (
    <div className='main-content'>
      <h1>Felipe Eduardo</h1>
      <div className='link-contents'>
        <Link to="/about-PT">Sobre</Link>
        <Link to="/portfolio-PT">Portforlio</Link>
        <Link to="/contact-PT">Contato</Link>
      </div>
    </div>
  )
}

export default HeaderPT