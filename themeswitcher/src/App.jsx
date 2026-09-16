import React, { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/card'

function App() {
  const [themeMode, setThemeMode]=useState("light")

  const lightTheme = () =>{
    setThemeMode("light")
  }
  const darkTheme = () =>{
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() =>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])
   

 

   
   return (
  <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <ThemeBtn />
      <Card />
    </div>
  </ThemeProvider>
)

  
}

export default App
