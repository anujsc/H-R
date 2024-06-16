import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Orange from './components/Orange'
import White from './components/White'
import White2 from './components/White2'
import White3 from './components/White3'
import White4 from './components/White4'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  // const locomotiveScroll = new LocomotiveScroll();


  return (
    <>
    <Home/>
    <Orange/>
    <White/>
    <White2/>
    <White3/>
    <White4/>
    </>
  )
}

export default App
