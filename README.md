# Workable

A Job board that allows users to create, save or apply for job postings, search for ideal jobs by title, location, or company!

## Tech Stack

### TypeScript · React.js · GraphQL · TypeORM · TailWindCSS ·NodeJS · ExpressJS · PostgresQL · Apollo

![The home page!](https://github.com/MHassan47/Workable/blob/master/client/src/assets/workable_home.JPG?raw=true)

![The search job page!](https://github.com/MHassan47/Workable/blob/master/client/src/assets/workable_search.JPG?raw=true)

![The saved job page!](https://github.com/MHassan47/Workable/blob/master/client/src/assets/workable_saved.JPG?raw=true)

![The create job Page!](https://github.com/MHassan47/Workable/blob/master/client/src/assets/workable_create_job.JPG?raw=true)

![The Registration page!](https://github.com/MHassan47/Workable/blob/master/client/src/assets/workable_registration.JPG?raw=true)

# Features

Users are able to:

Register, login and logout securely
Create, apply and save jobs
Search for jobs by company, title or location

# Setup

Clone repo
Rename the .envexample to .env and add your MONGO_URI

The project is made up of two running servers:

Client Server:

Cd into client directory
Install dependencies using npm install
Start the server with `npm start` command

Backend Server:

Cd into server directory
Install dependencies using npm install
Setup .env file using example.env as a refence
Start the server with `npm run start`

Apollo GraphQL (playground) server can be found at `http://localhost:5000/graphql`

# Dependencies

react: 18.2.0  
react-router-dom:6.3.0  
typescript: ^4.9.4  
@apollo/client: ^3.7.3  
express: 4.18.1  
pg: ^8.8.0  
graphql: ^15.8.0  
ts-node: ^10.9.1  
type-graphql: ^1.1.1  
typeorm: ^0.3.11  
jsonwebtoken: ^9.0.0  
bcryptjs: ^2.4.3  
nodemon: 2.0.19
