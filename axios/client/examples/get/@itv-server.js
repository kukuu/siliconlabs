var people = [
  {
    "name": "British Got Talent",
    "summary1": "Britain's best (and worst) variety acts compete to win a spot on The Royal Variety show.",
    "github": "The Durrells",
    "summary2": "Period drama. The financially struggling Durrells move to Corfu hoping for a better life.",
    "twitter": "Grantchester",
    "summary3": "Drama series set in 1953, focusing on Sidney Chambers, the vicar of Grantchester",
    "avatar": "1",
    "hobby": "Horrid Henry",
     "summary4": "Drama series set in 1953, focusing on Sidney Chambers, the vicar of Grantchester",
    "email": "American Dad!",
     "summary5": "Drama series set in 1953, focusing on Sidney Chambers, the vicar of Grantchester",
    "uni": "Take Me Out",
     "summary6": "Drama series set in 1953, focusing on Sidney Chambers, the vicar of Grantchester",

  },
  {
    "name": "Emerdale",
    "summary1": "Britain's best (and worst) variety acts compete to win a spot on The Royal Variety show.",
    "github": "The Housewives of Cheshire",
    "summary2": "Britain's best (and worst) variety acts compete to win a spot on The Royal Variety show.",
    "twitter": "Keith and Paddy Picture Show",
    "summary3": "Britain's best (and worst) variety acts compete to win a spot on The Royal Variety show.",
    "avatar": "100200",
    "hobby": "Mr Bean: Animated Series",
    "email": "Isle of Man TT",
    "uni": "American Dad!"
  },
  {
    "name": "Coronation Street",
    "summary1": "Britain's best (and worst) variety acts compete to win a spot on The Royal Variety show.",
    "github": "The Jeremy Kyle Show",
    "summary2": "Britain's best (and worst) variety acts compete to win a spot on The Royal Variety show.",
    "twitter": "Family Guy",
    "summary3": "Britain's best (and worst) variety acts compete to win a spot on The Royal Variety show.",
    "avatar": "1500684",
    "hobby": "Rat Trap",
    "email": "Final",
    "uni": "A House Full of Peters"
  }
];

module.exports = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/json'
  });
  res.write(JSON.stringify(people));
  res.end();
};
