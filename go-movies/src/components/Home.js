import React, {Component} from 'react';
import movie from "./../images/movie.jpeg"
export default class Home extends Component {
    render() {
        return (
            <div className="text-center">
            <h2>Go watch a movie!</h2>
            <hr />
            <img src={movie} alt="go Movie!"/>
            </div>
        )
    }
}