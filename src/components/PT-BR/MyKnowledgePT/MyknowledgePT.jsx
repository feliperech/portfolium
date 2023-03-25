import React from 'react'
import javascript from '../../../images/javascript.png'
import html from '../../../images/html.png'
import css from '../../../images/css.png'
import tailwind from '../../../images/tailwind.png'
import react from '../../../images/react.png'
import redux from '../../../images/redux.png'
import sql from '../../../images/SQL.png'
import docker from '../../../images/docker.png'
import java from '../../../images/java.png'
import c from '../../../images/C.png'
import python from '../../../images/python.png'
import processador from '../../../images/processador.png'

import './MyKnowledgePT.css'

function MyknowledgePT() {
  return (
    <div>
      <h1 className='title-element'>Frontend</h1>
      <div className="itens-front">
        <div>
          <img src={javascript} alt="javascript" />
          <h2>Javascript</h2>
        </div>
        <div>
          <img src={html} alt="html" />
          <h2>HTML 5</h2>
        </div>
        <div>
          <img src={css} alt="css" />
          <h2>CSS 3</h2>
        </div>
        <div>
          <img src={react} alt="react" width="150%" />
          <h2>React</h2>
        </div>
        <div>
          <img src={tailwind} alt="tailwind" />
          <h2>Tailwind CSS</h2>
        </div>
        <div>
          <img src={redux} alt="redux" />
          <h2>Redux</h2>         
        </div>
        <hr  width="100%" />
      </div>

      <h1 className='title-element'>Backend</h1>
      <div className="itens-front">
        <div>
          <img src={java} alt="java" />
          <h2>Java</h2>
        </div>
        <div>
          <img src={docker} alt="docker" />
          <h2>Docker</h2>
        </div>
        <div>
          <img src={sql} alt="sql" />
          <h2>SQL</h2>
        </div>
        <div>
          <img src={c} alt="react" />
          <h2>Programação C</h2>
        </div>
        <div>
          <img src={python} alt="python" />
          <h2>Python</h2>
        </div>
        <hr  width="100%" />
      </div>

      <h1 className='title-element'>Microcontroladores</h1>
      <div className="itens-front">
        <div>
          <img src={processador} alt="ESP32" />
          <h2>ESP32 LoRaWAN</h2>
        </div>
        <div>
          <img src={processador} alt="ARM" />
          <h2>ARM Cortex MX Series</h2>
        </div>
        <div>
          <img src={processador} alt="ATMEGA" />
          <h2>ATMEGA 328P (Arduino Family)</h2>
        </div>
        <div>
          <img src={processador} alt="PIC" />
          <h2>Processadores PIC</h2>
        </div>
      </div>
    </div>
  )
}

export default MyknowledgePT