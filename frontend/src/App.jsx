import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Login from './pages/authentication/Login'
import './assets/css/style.css'

import ChooseUser from './pages/authentication/chooseUser'
import Home from './pages/home'
import Register from './pages/authentication/Registration'
import RoutesMarkup from './router/RoutesMarkup'


function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/chooseUser' element={<ChooseUser/>}/>
            <Route path='/Register' element={<Register />}/>
        </Routes>
        <RoutesMarkup />

    </div>
  )
}

export default App
