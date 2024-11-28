import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Crud from './components/Crud'
import Addnote from './components/Addnote';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
        <Router>
        <Routes>
        <Route path="/" element={<Crud/>} />
        <Route path="/add" element={<Addnote/>} />
        </Routes>
        </Router>
    </div>
  )
}

export default App