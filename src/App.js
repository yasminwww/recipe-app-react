import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import SearchContextProvider from './components/SearchContext'

import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <SearchContextProvider>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </SearchContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
