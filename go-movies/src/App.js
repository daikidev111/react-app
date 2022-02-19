import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from 'react-router-dom';

// or you could import BrowserRouter 
import Movies from './components/Movies';
import Admin from './components/Admin';
import Home from './components/Home';
import OneMovie from './components/OneMovie';
import Genres from './components/Genres';
import OneGenre from './components/OneGenre';
import EditMovie from './components/EditMovie';
import Login from './components/Login'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jwt: "",
    }
    this.handleJWTChange(this.handleJWTChange.bind(this))
  }

  componentDidMount() {
    // when loading the page check if it has jwt token
    let t = window.localStorage.getItem("jwt");
    if (t) { // if the session data exists
      if (this.state.jwt === "") { // if the state of jwt is empty
        this.setState({jwt: JSON.parse(t)}) // then set the state again from session jwt
      }
    }
  }
  handleJWTChange = (jwt) => {
    this.setState({jwt: jwt})
  }

  logout = () => {
    this.setState({jwt: ""});
    window.localStorage.removeItem("jwt");
  }

  render() {
    let loginLink;
    if (this.state.jwt === "") {
      loginLink = <Link to="/login">Login</Link>
    } else {
      loginLink = <Link to="/logout" onClick={this.logout}>Logout</Link>
    }
    return (
      //Wrap everything you want to be routed
      <Router> 
      <div className="container">

        <div className='row'>
          <div className="col mt-3">
          <h1 className='mt-3'>
            Go Watch a Movie!
          </h1>
          </div>
          <div className='col mt-3 text-end'>
            {loginLink}
          </div>
          <hr className='mb-3'></hr>
        </div>

        <div className='row'>
          <div className='col-md-2'>
            <nav>
              <ul className='list-group'>
                <li className='list-group-item'>
                  {/* <a href='/'>Home</a> */}
                  <Link to='/'>Home</Link>
                </li>
                <li className='list-group-item'>
                  {/* <a href='/movies'>Movies</a> */}
                  <Link to='/movies'>Movies</Link>
                </li>
                <li className='list-group-item'>
                  <Link to='/genres'>Genres</Link>
                </li>
                {this.state.jwt !== "" && (
                  <Fragment>
                    <li className='list-group-item'>
                      <Link to='/admin/movie/0'>Add movie</Link>
                    </li>
                    <li className='list-group-item'>
                      {/* <a href='/admin'>Manage Catalogue</a> */}
                      <Link to='/admin'>Manage Catalogue</Link>
                    </li>
                  </Fragment>
                )}
              </ul>
              <pre>
                {JSON.stringify(this.state, null, 3)}
              </pre>
            </nav>

          </div>
          <div className='col-md-10'>
            {/* Switch stmt is used to indicate where we want the content to show up */}
            <Switch>
              {/* This is how to do the nested routing for movie id */}
              {/* <Route path='/movies/:id'>
                <Movie />
              </Route> */}
              <Route path="/movies/:id" component={OneMovie}></Route>
              <Route path="/movies">
                <Movies />
              </Route>

              <Route path="/genre/:id" component={OneGenre}/>

              {/* This is to bind it with the handleJWTchange function so that we can lift the state */}
              <Route path="/login" component={(props) => <Login {...props} handleJWTChange={this.handleJWTChange}/>}/>
              
              <Route exact path="/genres">
                <Genres />
              </Route>

              <Route path="/admin/movie/:id" component={(props) => (
                  <EditMovie {...props} jwt={this.state.jwt} />
              )}
              />
              
              <Route path="/admin" component= {(props) => (
                <Admin {...props} jwt={this.state.jwt}/>
              )}/>

              <Route path="/">
                <Home />
              </Route>

              <Route path="/movies">
                <Movies />
              </Route>
            </Switch>
        
          </div>
        </div>
      </div>
      </Router>
    );
  }
}
