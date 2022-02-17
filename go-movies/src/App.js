import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// or you could import BrowserRouter 
import Movies from './components/Movies';
import Admin from './components/Admin';
import Home from './components/Home';

export default function App() {
  return (
    //Wrap everything you want to be routed
    <Router> 
    <div className="container">

      <div className='row'>
        <h1 className='mt-3'>
          Go Watch a Movie!
        </h1>
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
                <Link to='/movies'>movies</Link>
              </li>
              <li className='list-group-item'>
                {/* <a href='/admin'>Manage Catalogue</a> */}
                <Link to='/admin'>Manage Catalogue</Link>
              </li>
            </ul>
          </nav>

        </div>
        <div className='col-md-10'>
          {/* Switch stmt is used to indicate where we want the content to show up */}
          <Switch>
            <Route path="/movies">
              <Movies />
            </Route>

            <Route path="/admin">
              <Admin />
            </Route>

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
