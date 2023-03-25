import React from 'react'
import AboutPersonalPT from '../../../components/PT-BR/AboutPersonalPT/AboutPersonalPT'
import AboutProfissionalPT from '../../../components/PT-BR/AboutProfissionalPT/AboutProfissionalPT'
import HeaderPT from '../../../components/PT-BR/HeaderPT/HeaderPT'

function AboutPT() {
  return (
    <div>
      <HeaderPT />
      <AboutProfissionalPT />
      <AboutPersonalPT />
    </div>
  )
}

export default AboutPT