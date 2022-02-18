import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from 'react-router-dom';

// or you could import BrowserRouter 
import Movies from './components/Movies';
import Admin from './components/Admin';
import Home from './components/Home';
import OneMovie from './components/OneMovie';
import Genres from './components/Genres';
import OneGenre from './components/OneGenre';
import EditMovie from './components/EditMovie';
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
                <Link to='/movies'>Movies</Link>
              </li>
              <li className='list-group-item'>
                <Link to='/genres'>Genres</Link>
              </li>
              <li className='list-group-item'>
                <Link to='/admin/movie/0'>Add movie</Link>
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
            {/* This is how to do the nested routing for movie id */}
            {/* <Route path='/movies/:id'>
              <Movie />
            </Route> */}
            <Route path="/movies/:id" component={OneMovie}></Route>
            <Route path="/movies">
              <Movies />
            </Route>

            <Route path="/genre/:id" component={OneGenre}/>

            <Route exact path="/genres">
              <Genres />
            </Route>

            <Route path="/admin/movie/:id" component={EditMovie}/>
            
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
