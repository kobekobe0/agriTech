import React from 'react'
import Nav from './components/nav/Nav'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Action from './components/action/Action'
import analytics from './components/analytics/analytics'
import './app.css'
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="body">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/action" component={Action} />
                        <Route exact path="/Analytics" component={analytics} />
                    </Switch>
                </div>
                <Nav />
            </div>
        </Router>
    )
}

export default App
