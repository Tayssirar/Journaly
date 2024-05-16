import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Login from './pages/authentication/Login'
import './assets/css/style.css'
import 'rsuite/dist/rsuite-no-reset.min.css';


import ChooseUser from './pages/authentication/chooseUser'
import Home from './pages/home'
import Register from './pages/authentication/Registration'
import RoutesMarkup from './router/RoutesMarkup'
import Error404 from './pages/error/Error404';


function App() {
  return (
    <div>

        <RoutesMarkup />

    </div>
  )
}

export default App
