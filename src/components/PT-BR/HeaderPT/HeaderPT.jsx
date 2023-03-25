import React from 'react'
import SocialMedia from '../../general/SocialMedia/SocialMedia'
import { Link } from 'react-router-dom'
import './HeaderPT.css'
import { useHistory } from 'react-router-dom'

import logo from '../../../images/logo.png'
function HeaderPT() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <div>
      <header className='main-content'>
        <button 
          className="button-header"
          type="button"
          onClick={handleClick}
        >
          <img src={logo} alt="logo" width="150px" onClick={() => <Link to="/home" />}/>
        </button>
        <div className='link-contents'>
          <Link className="link-element" to="/about-PT">Sobre</Link>
          <Link to="/portfolio-PT">Portfolio</Link>
          <Link to="/contact-PT">Contato</Link>
          <Link to="/knowledge-PT">Conhecimentos</Link>
        </div>
        <SocialMedia />
      </header>
    </div>
  )
}

export default HeaderPT