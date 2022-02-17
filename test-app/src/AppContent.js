import React, {Component} from 'react';

export default class AppContent extends Component {

    // How to lift the state of a component
    constructor(props) {
        super(props);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    // How to lift the state of a component
    handlePostChange(posts) {
        this.props.handlePostChange(posts);
    }

    // state = {posts: []}; This is for local state without shifting

    // // How to declare state locally
    // state = {posts: []};

    // // event1 which alerts when the mouse is on the attribute
    // mouseFunction = () => {
    //     alert('mouseFunction!');
    // }

    // // event2 which alerts when the mouse leaves from the attributes
    // leftParagraph = () => {
    //     alert("left the paragraph");
    // }

    // // event 3 which alerts when the button fetch is clicked
    // anotherFunction() {
    //     alert('another function');
    
    // }

    /* Event handler when the button is clicked 
    fetchList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            this.anotherFunction();
            let posts = document.getElementById("post-list");
            json.forEach(function(obj) {
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(obj.title));
                posts.appendChild(li);
            })
        })
    }
    */

    fetchList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
            // this.state.posts = json <- you cannot do explicit substitution! you must use state method
            // this.setState({posts: json});
            // How to lift the state of a component
            this.handlePostChange(json);
        })
    }

    clickedItem = (x) => {
        console.log("clicked", x);
    }

    render() {
        return (
            <div>
                This is the app content
                <br />
                <hr />

                {/* How to callback an event function  */}
                {/* <p onMouseEnter={this.mouseFunction} onMouseLeave={this.leftParagraph}>this is some text</p> */}
                <button onClick={this.fetchList} className="btn btn-primary">Fetch Data</button>

                <hr />
                {/* <p>Post is {this.state.posts.length} items long</p> This is for local state without shifting */}

                <p>Post is {this.props.posts.length} items long</p>
                
                {/* This shows how to use state
                key must be unique for state function */}
                <ul>
                    {/* {this.state.posts.map((c) => (  This is for local state without shifting */}

                    {this.props.posts.map((c) => (
                        <li key={c.id}>
                            <a href="#!" onClick={() => this.clickedItem(c.id)}>
                                {c.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}