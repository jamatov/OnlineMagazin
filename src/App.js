import React from 'react'
import { Header } from './common/header/Header'
import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import './App.scss'
import { Pages } from './pages/Pages';

export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path='/'>
            <Pages/>
          </Route>
        </Switch>
      </Router> 
    </>
    
  )
}
