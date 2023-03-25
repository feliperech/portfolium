import React from 'react'
import linkedin from '../../../images/linkedin.svg'
import instagram from '../../../images/instagram.svg'
import youtube from '../../../images/youtube.svg'
import github from '../../../images/github.svg'
import HeaderPT from '../../../components/PT-BR/HeaderPT/HeaderPT'
import './Contact.css'

function Contact() {
  return (
    <div>
      <HeaderPT />
      <div className='contact-pt-content'>
        <div className='contact-element' >
          <a
          href="https://www.linkedin.com/in/felipegerberdev/"
          >
            <img className="img-content" src={linkedin} alt="Linkedin" />
          </a>
          <span>LinkedIn</span>
        </div>
        <div className='contact-element' >
          <a
          href="https://www.instagram.com/felipe.erg/"
          >
            <img className="img-content" src={instagram} alt="Instagram" />
          </a>
          <span> Instagram</span>
        </div>
        <div className='contact-element'>
          <a
          href="https://www.youtube.com/@CircuitandoEL"
          >
            <img className="img-content" src={youtube} alt="Youtube" />
          </a>
          <span>YouTube</span>
        </div>
        <div className='contact-element'>
          <a
          href="https://github.com/feliperech"
          >
            <img className="img-content" src={github} alt="Github" />
          </a>
          <span>Github</span>
        </div>
      </div>
    </div>
  )
}

export default Contact