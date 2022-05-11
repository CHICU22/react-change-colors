import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [darkTheme, setTheme] = useState(false)

    let switchThemeEvent = () =>{
      setTheme(!darkTheme)
    }

    useEffect(()=>{
      const element = document.getElementById("theme")
      if(!element) return
      element.style.backgroundColor = darkTheme === true ? "red" : "purple"
    }, [darkTheme])

    /*--------------------------------------------------------------------*/

    const [lightTheme, setTheme2] = useState(false)

    let switchThemeEvent2 = () =>{
      setTheme2(!lightTheme)
    }

    useEffect(()=>{
      const element = document.getElementById("theme2")
      if(!element) return
      element.style.backgroundColor = lightTheme === true ? "green" : "blue"
    }, [lightTheme])
    

    return(
      <main>
        <button onClick={switchThemeEvent}>CLICK!</button>
        <div id="theme"></div>
        <button onClick={switchThemeEvent2}>Click 2 Times!</button>
        <div id="theme2"></div>
      </main>
    )
}

export default App;
