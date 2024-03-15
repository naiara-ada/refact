import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Top from './Top.jsx'
import Footer from './Footer.jsx'
import EmpleadosCard from './EmpleadosCard.jsx'
import './App.css'
import Calculator  from './Calculator.jsx'

function App() {

   
  return (
    // tengo que poner aquí el logo en lo de arriba. Que no se me olvide
    <div className="webpage">

      <Top />
      
      <div className="envoltura">
        {EmpleadosCard}
      </div>
      
      <Calculator />

      <Footer />

    </div>
  )
}

export default App
