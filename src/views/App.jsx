
import './App.css'
import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../componets/layout/Menu'
import Content from '../componets/layout/Content'


const App = props => (
    <div className="App">
        <Router>

        <Menu />
        <Content />

        </Router>
        
    </div>
)

export default App 
