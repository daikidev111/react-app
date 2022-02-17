import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
export default class Movies extends Component {
    state = {movies: []};

    componentDidMount() { // this is to learn the lifecycle of react see lecture 31
        // executes after the component is rendered to the screen.
        // after the user clicks the movies from the App.js then it mounts the state with the populated information
        this.setState({
            movies: [
                {id: 1, title: "The shawshank redemption", runtile: 142},
                {id: 2, title: "The GodFather", runtile: 175},
                {id: 3, title: "The Dark Knight", runtile: 153}
            ]
        })
    }

    render() {
        return (
            <Fragment>
            <h2>Choose a movie</h2>

            <ul>
                {this.state.movies.map( (m) => (
                    <li key={m.id}>
                        <Link to={`/movies/${m.id}`}>{m.title}</Link>
                    </li>
                ))}
            </ul>
            </Fragment>
        );
    }
}