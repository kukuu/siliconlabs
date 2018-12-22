var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

var GraphQLSchema = graphql.GraphQLSchema;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLString = graphql.GraphQLString;
var GraphQLInt = graphql.GraphQLInt;

//This is the data
var goldbergs = {
  1: {
    character: "Beverly Goldberg",
    actor: "Wendi McLendon-Covey",
    role: "matriarch",
    traits: "embarrasing, overprotective",
    id: 1
  },
  2: {
    character: "Murray Goldberg",
    actor: "Jeff Garlin",
    role: "patriarch",
    traits: "gruff, lazy",
    id: 2
  },
  3: {
    character: "Erica Goldberg",
    actor: "Hayley Orrantia",
    role: "oldest child",
    traits: "rebellious, nonchalant",
    id: 3
  },
  4: {
    character: "Barry Goldberg",
    actor: "Troy Gentile",
    role: "middle child",
    traits: "dim-witted, untalented",
    id: 4
  },
  5: {
    character: "Adam Goldberg",
    actor: "Sean Giambrone",
    role: "youngest child",
    traits: "geeky, pop-culture obsessed",
    id: 5
  },
  6: {
    character: "Albert 'Pops' Solomon",
    actor: "George Segal",
    role: "grandfather",
    traits: "goofy, laid back",
    id: 6
  }
}

//This is the output  function returned when the quesry the query

function getGoldberg(id) {
  return goldbergs[id] //1. goldbergs is the data
}


//This is the model
var goldbergType = new GraphQLObjectType({
  name: 'Goldberg',
  description: "Member of The Goldbergs",
  fields: {
    character: {
      type: GraphQLString,
      description: "Name of the character",
    },
    actor: {
      type: GraphQLString,
      description: "Actor playing the character",
    },
    role: {
      type: GraphQLString,
      description: "Family role"
    },
    traits: {
      type: GraphQLString,
      description: "Traits this Goldberg is known for"
    },
    id: {
      type: GraphQLInt,
      description: "ID of this Goldberg",
    }
  }
});

var queryType = new GraphQLObjectType({
  name: 'query',
  description: "Goldberg query",
  fields: {
    goldberg: {
      type: goldbergType,//this is from the model
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: function(_, args){
        //When you resolve the model the result is a function that returns a the array data set
        return getGoldberg(args.id) 
      }
    }
  }
});

var schema = new GraphQLSchema({
  query: queryType
});

var graphQLServer = express();
graphQLServer.use('/', graphqlHTTP({ schema: schema, graphiql: true }));
graphQLServer.listen(8080);

//GraphQL server runs at port 8080
console.log("The GraphQL Server is running.")

//Configure webpack to  compile
//1. Run server
//2. parse static files (sass/jsx)
//3. modules to exclude

var compiler = webpack({
  entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: "/static/"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
          }
        ]
    }
});

//inject graphQL IDE graphiQL as proxy to avoid CORS
var app = new WebpackDevServer(compiler, {
  contentBase: '/public/',
  proxy: {'/graphql': `http://localhost:${8081}`},
  publicPath: '/static/',
  stats: {colors: true}
});

// Serve static resources
app.use('/', express.static('static'));
app.listen(3007);//Application served at port 3000
console.log("The App Server is running.")
