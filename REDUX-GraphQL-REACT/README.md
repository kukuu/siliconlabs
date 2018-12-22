# Redux, GraphQL and REACT

## Installation and running application
1. Clone repository

2. ```npm install```

3. ```npm start```

4. Go to http://localhost:3099/

5. Use this query to test the API . Change the ids and submit the query

{goldberg(_id: 2) {_id, categories, tags}}

5. Go to http://localhost:8080/graphql for GraphiQl Interactive IDE


## Dependencies

1. NodeJS

2. REDUX

3. GraphQL

4. REACT

5. Webpack

6. webpack-dev-server.

7. Express

8. express-graphql

9. Babel

10. es6


## Application Notes:

A. We use GraphQL data modelling Architecture to construct 3 types to enable get an end point:

i. A type for the model.

ii. A type for the query.

iii. A type for the schema.

When we resolve our query, we return the output of a function from the data model. This is in server.js


B. Why Express?

We use express and the graphqlHTTP middleware to serve the schema.

C. Serving our application

To serve the front end of our app we need to install babel, babel-loader, and a couple of babel presets.

D. Immmutability:

To ensure data consitency and best practice we use immutable.  This presents a mutative API which does not update the data in-place, but instead always yields new updated data.

E. Thunk middleware:

Help  to make  requests.

F. Component Did Mount life Cycle:

This is set to retrieve the result of A query on application first load from server: 

{goldberg(_id: 1) {_id, categories, tags}}



