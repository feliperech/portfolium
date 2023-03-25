import React from 'react'
import storyTelling1 from '../../../images/storyTelling.png'
import storyTelling2 from '../../../images/storyTelling2.png'
import storyTelling3 from '../../../images/storyTelling3.png'
import storyTelling4 from '../../../images/storyTelling4.png'
import storyTelling5 from '../../../images/storyTelling5.png'

import './AboutProfissionalPT.css'
function AboutProfissionalPT() {
  return (
    <div className='content-storytelling'>
      <h1 className="title-element">Sobre o profissional Felipe Gerber</h1>
      <div className='story-telling'>
        <img src={storyTelling1} alt="Circuit" width='50%'/>
        <p>
          Me formei em Engenharia Elétrica pela Universidade Estadual de Maringá - UEM e
          durante a minha trajetória acadêmica, tive contato com programação para tratamento de sinais, para realização de
          testes científicos e para atuação de sistemas embarcados, mas foi programando microcontroladores
          que me ingressei de fato no mundo do desenvolvimento.
        </p>
      </div>
      <div className='story-telling'>
        <p>
          Em 2022, comecei a estudar desenvolvimento Web. Foi amor a primeira vista e, desde então,
          venho transformando ideias e criatividade em projetos. 
        </p>
        <img src={storyTelling2} alt="Circuit" width='50%' />

      </div>
      <div className='story-telling'>
      <img src={storyTelling3} alt="Circuit" width='50%'/>
        <p>
          Ainda em 2022, iniciei meus estudos na instituição de ensino Trybe, famosa pela 
          qualidade de ensino e por ser referência na América Latina em ensino de desenvolvimento Web
        </p>
      </div>
      <div className='story-telling' >
        <p>
          Em 2023, concluí minha formação em Engenharia Elétrica e iniciei uma pós-graduação
          focada em Desenvolvimento Java, disponibilizada pela Universidade Tecnológica 
          Federal do Paraná - UTFPR.
        </p>
        <img src={storyTelling4} alt="Circuit" width='50%' />

      </div>
      <div className='story-telling'>
      <img src={storyTelling5} alt="Circuit" width='50%' />
        <p>
          Sou apaixonado em representar, liderar e comunicar. E, por causa dessas minhas paixões,
          venho exercendo papéis de liderança desde quando iniciei minha vida acadêmica. Fui representante da Engenharia Elétrica da Universidade Estadual de Maringá no CREA-PR e
          dos alunos do curso no conselho de profissionais do departamento de Engenharia. Também sou
          EmbaixaTryber, representando mais de 150 alunos de turma.
        </p>
      </div>
    </div>
  )
}

export default AboutProfissionalPT