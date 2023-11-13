import { useState } from 'react'
import AllPuppies from './components/AllPuppies'
import AddPuppy from './components/AddPuppy'
import SinglePuppy from './components/SinglePuppy'
import './App.css'

import { Link, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <h1>Puppy Bowl</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add Puppy</Link>
      </nav>

    <Routes>
      <Route path='/' element={<AllPuppies/>}/>
      <Route path='/add' element={<AddPuppy/>}/>
      <Route path='/details/:id' element={<SinglePuppy/>}/>
    </Routes>
    </>
  )
}

export default App