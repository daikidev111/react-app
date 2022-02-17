import React, { Component, Fragment } from 'react';
import './AppFooter.css';

export default class AppFooter extends Component {

    // How to lift the state of a component
    constructor(props) {
        super(props);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    // How to lift the state of a component
    handlePostChange(posts) {
        this.props.handlePostChange(posts);
    }

    render() {
        return (
            <Fragment> 
            <h1>{ this.props.title }</h1>
            {/* This gives an error because each component has its own state 
                Then how to share the state between components?
                -> lifting the state of a component 
            */}
            {/*  ERROR: <p>Length of posts is {this.state.posts.length}</p> */}
            
            {/* After lifting the state of a component */}
            <p>There are {this.props.posts.length} entries in the posts</p>
            </Fragment>
        );
    }
}