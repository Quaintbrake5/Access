// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import TopNavbar from './components/TopNavbar'
import Header from './components/Header'
import NewsStrip from './components/NewsStrip'
import MainSection from './components/MainSection'
import Payday from './components/Payday'
import Service from './components/Service'
import Promotion from './components/Promotion'
import Solutions from './components/Solutions'
import ColorLine from './components/ColorLine'


function App() {

  return (
    <>
      <TopNavbar/>
      <Header/>
      <NewsStrip/>
      <MainSection/>
      <Payday/>
      <Service/>
      <Promotion/>
      <Solutions/>
      <br/>
      <ColorLine/>
      <br/>
    </>
  )
}

export default App
