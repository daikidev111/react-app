import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
export default class Movies extends Component {
    state = {
        movies: [],
        isLoaded: false,
        error: null,
    };

    componentDidMount() { // this is to learn the lifecycle of react see lecture 31
        // executes after the component is rendered to the screen.
        // after the user clicks the movies from the App.js then it mounts the state with the populated information
        // this.setState({
        //     movies: [
        //         {id: 1, title: "The shawshank redemption", runtile: 142},
        //         {id: 2, title: "The GodFather", runtile: 175},
        //         {id: 3, title: "The Dark Knight", runtile: 153}
        //     ]
        // })
        fetch("http://localhost:4000/v1/movies")
            // .then((response) => response.json())
            .then((response) => {
                console.log("Status Code is", response.status);
                if (response.status != 200) {
                    let err = Error;
                    err.message = "Invalid Response Code: " + response.status;
                    this.setState({error: err});
                }
                return response.json();
            })
            .then((json) => {
                this.setState({
                    movies: json.movies,
                    isLoaded: true
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error 
                    })
                }
                );
            });
    }

    render() {
        const { movies, isLoaded, error } = this.state;
        if (error) {
            return <div> Error: {error.message} </div>
        }
        else if (!isLoaded) {
            return <p>Loading ...</p>
        } else {
            return (
                <Fragment>
                <h2>Choose a movie</h2>
    
                <div className="list-group">
                    {movies.map((m) => (
                        <Link
                            key={m.id}
                            to={`/movies/${m.id}`}
                            className="list-group-item list-group-item-action"
                        >
                            {m.title}
                        </Link>
                    ))}
                </div>
                </Fragment>
            );
        }
    }
}