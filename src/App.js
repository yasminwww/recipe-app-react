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
        <Navbar />
        <Switch>
          <SearchContextProvider>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </SearchContextProvider>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
