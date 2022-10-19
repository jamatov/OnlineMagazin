import React from 'react'
import { Header } from './common/header/Header'
import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './App.scss'

export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          
        </Switch>
      </Router> 
    </>
    
  )
}
