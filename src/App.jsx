import { useState } from 'react'
import './App.scss'

import BottomMenu from "./components/BottomMenu/BottomMenu"
import Menu from "./components/Menu/Menu"

function App() {

  const [menu, setMenu] = useState(true)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (

    <div className="App">

      {menu && <Menu />}

      
      <BottomMenu toggleMenu={toggleMenu} />
      
    </div>

  )

}

export default App
