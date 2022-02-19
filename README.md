# What is this repo?
Go Movie is an application that allows a user to view a list of movies that includes information of title, description, rating, and release year. This list can be viewed either by movie title or genre.
It also allows a user to create, edit, and delete a movie. To do these operations, you must be logged in with a appropriate jwt token, which should be saved in the local storage.

Please note that this project does not have an intention of commercialization.

# What kind of folder does this repo contain?
This repo contains two main folders, which are go-movies and backend-app.
The go-movies folder represents the frontend part of the application, which is written in React. The backend-app folder represents the backend part of the application, which is written in Golang.

# Getting started
This is an instruction of setting up this project locally. To get a local copy up and running follow these simple example steps.

- Prerequisites
    node:
    -> https://nodejs.org/en/download/↲
    npm:
    -> npm install
    
    It works the best with node that has a version of v14.16.1 and npm that has a version of 6.4.12

    postgres:
    -> For mac, you can install postgres.app on Apple store


    go:
    -> https://go.dev/dl/
    -> My version is : go version go1.17 darwin/amd64


- Installation
Below is an instruction on installing and setting up this project.

    1. Clone the repo
        https://github.com/daikidev111/react-app.git

    2. Set up the frontend part (go-movies)
        cd go-movies
        npm install

    3. Set up the backend part (backend-app)
        cd backend-app
        go get -u github.com/julienschmidt/httprouter
        go get -u github.com/lib/pq@v1.10.0
        go get github.com/pascaldekloe/jwt
        go get github.com/justinas/alice
    
    4. Set up the postgres database
        cd sql
        Go to the postgres.app and create a new database named go
        /Applications/Postgres.app/Contents/Versions/14/bin/psql -p{port number that you have set up} "go"
        exit the postgres
        psql -d go -f go_movies.sql
        Check if it successfully imported the sql file 

My Personal Note:
How to start a go project
-> gomod init backend

install httprouter 
go get -u github.com/julienschmidt/httprouter


install psql 
go get -u github.com/lib/pq@v1.10.0

install jwt
go get github.com/pascaldekloe/jwt

install bcrypt
go get golang.org/x/crypto/bcrypt

install
go get github.com/justinas/alice
