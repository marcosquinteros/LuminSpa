import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <Footer pathIndex="/Inicio" pathNosotros="/Nosotros" pathError="/*" />
      </Router>
         
    </div>
      
  )
}

export default App
