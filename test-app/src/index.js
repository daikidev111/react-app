import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import AppHeader from './AppHeader';
import AppFooterFunctionalComponent from './AppFooterFunctionalComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

class App extends Component {

  // How to lift the state for sharing between components

  constructor(props) {
    super(props); // from the component
    // bind one function to another
    this.handlePostChange = this.handlePostChange.bind(this);
    this.state = {posts: []};

  }

  // How to lift the state of a component

  handlePostChange(posts) {
    this.setState({posts: posts});
  }


  render() {
    const myProps = {
      title: "My cool app",
      subject: "My subject",
      favourite_color: "red"
    }
    return (
      <div className='app'>
      {/*  This gets awkward as # of props increase<AppHeader title="My App" subject="My subject" favourite_color="red"/> */}
      {/* Better way is ... */}
      <AppHeader {...myProps} posts={this.state.posts} handlePostChange={this.handlePostChange}/>
      {/* Passing the this.state.posts to enable state sharing */}
      <AppContent posts={this.state.posts} handlePostChange={this.handlePostChange}/> 
      {/*  How to lift the state of a component shown above in the posts and handlePostChange */}
      {/* binding app header and appcontent with the handle post change to share posts data */}
      {/* <AppFooter /> */}
      <AppFooterFunctionalComponent myProperty={"Agency"}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));