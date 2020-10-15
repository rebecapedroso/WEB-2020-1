import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'


import Signin from './components/Signin'
import Signup from './components/Signup'
import ContentA from './components/ContentA'
import Create from './components/Create'
import Edit from './components/Edit'
import List from './components/List'
import Home from './components/Home'

import {connect} from 'react-redux'

//export default class App extends Component {
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link to={'/'} className='navbar-brand'>Firebase Auth</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li>
                  <Link to={'/'} className='nav-link'>Home</Link>
                </li>
                <li>
                  <Link to={'/signin'} className='nav-link'>Login</Link>
                </li>
                <li>
                  <Link to={'/signup'} className='nav-link'>Cadastrar</Link>  
                </li>
                <li>
                  <Link to={'/contentA'} className='nav-link'>ContentA</Link>  
                </li>
                <li>
                  <Link to={'/create'} className='nav-link'>Create</Link>
                </li>
                <li>
                  <Link to={'/list'} className='nav-link'>List</Link>
                </li>
              </ul>
            </div>
          </nav>

          <h2>Firebase Auth</h2> <br />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/list' component={List} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/ContentA' component={ContentA} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state){
  return{
    userLogado: state.authReducer.user
  }
}

export default connect(mapStateToProps)(App)