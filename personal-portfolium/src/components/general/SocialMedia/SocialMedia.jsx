import React from 'react'
import linkedin from '../../../images/linkedin.svg'
import instagram from '../../../images/instagram.svg'
import youtube from '../../../images/youtube.svg'
import github from '../../../images/github.svg'
import './SocialMedia.css'

function SocialMedia() {
  return (
    <div className='social-content'>
      <a
       href="https://www.linkedin.com/in/felipegerberdev/"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
      <a
       href="https://www.instagram.com/felipe.erg/"
      >
        <img src={instagram} alt="Instagram" />
      </a>
      <a
       href="https://www.youtube.com/@CircuitandoEL"
      >
        <img src={youtube} alt="Youtube" />
      </a>
      <a
       href="https://github.com/feliperech"
      >
        <img src={github} alt="Github" />
      </a>
    </div>
  )
}

export default SocialMedia