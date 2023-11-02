import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
function App() {

    return (
        <>
        
         <Header/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About />}/>
         </Routes>
        </>
    )

}

export default App
