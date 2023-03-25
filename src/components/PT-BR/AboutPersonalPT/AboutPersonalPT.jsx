import React from 'react'
import storyTelling6 from '../../../images/storyTelling6.png'
import storyTelling7 from '../../../images/storyTelling7.png'
import storyTelling8 from '../../../images/storyTelling8.png'
import storyTelling9 from '../../../images/storyTelling9.png'
import storyTelling10 from '../../../images/storyTelling10.png'
import storyTelling11 from '../../../images/storyTelling11.png'
import storyTelling12 from '../../../images/storyTelling12.png'
import './AboutPersonalPT.css'

function AboutPersonalPT() {
  return (
    <div>
      <h1 className="title-element">Sobre a pessoa Felipe Gerber</h1>
      <div className='container-story'>
        <div className='story-element'>
          <img src={storyTelling6} alt="my place" width="50%" height="50%"/>
          <p>
            Sou natural de Manoel Ribas, uma cidadezinha do interior do Paraná. Fui criado no
            sítio e, por isso, conservo com amor minhas raízes. 
          </p>
        </div >
        <div className='story-element'>
          <img src={storyTelling7} alt="my love" width="50%" height="50%" />
          <p>
            Sou casado com minha linda esposa Brendha. Estamos juntos desde os 15 anos de idade 
            e ela é a parte fundamental da minha vida.
          </p>
        </div>
        <div className='story-element'>
          <img src={storyTelling8} alt="my dogs"  width="50%" height="50%"/>
          <p>
            Sou pai de três cachorros que amo muito: Moranga, uma Shih-tzu muito carinhosa, Max, um
            vira-lata caramelo muito amoroso e Mawii, uma Border Collie muito inteligente.
          </p>
        </div>
        <div className='story-element'>
          <img src={storyTelling9} alt="my acordeon" width="50%" height="50%"/>
          <p>
            Sou fascinado por música, independentemente do estilo musical. Entretanto, tenho uma
            quedinha por música gaúcha e, por causa disso, aprendi a tocar Acordeon. 
          </p>
        </div>
        <div className='story-element'>
          <img src={storyTelling11} alt="my fish" width="50%" height="50%" />
          <p>
            Nas horas vagas, gosto muito de pescar. Mas, infelizmente, não tenho o dom.
          </p>
        </div>
        <div className='story-element'>
          <img src={storyTelling10} alt="my bike" width="50%" height="50%" />
          <p>
            Meu esporte preferido é ciclismo.
          </p>
        </div>
        <div className='story-element'>
          <img src={storyTelling12} alt="my channel" width="50%" height="50%" />
          <p>
            Tenho um projeto social para ensinar tópicos de Engenharia Elétrica e Desenvolvimento
            gratuitamente, pelo YouTube. Atualmente, estou estudando Libras para levar esse conhecimento
            a mais pessoas.
          </p>
        </div>
      </div>
     

    </div>
  )
}

export default AboutPersonalPT