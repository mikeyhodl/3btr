const express = require("express"); //set up everything
const app = express();
const Database = require("@replit/database")
const db = new Database() //get replit database


app.use(express.static('public'))

//this code I didnt even write someone else helped me and 
//You could use this with Javascript fetch() to get the score when needed - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

/* 
Get Score ROUTE
go to <domain name>.repl.co/get to try
*/
app.get("/getscore", (req, res) => {
  console.log('getting score')
  db.get("score").then(value => {
    res.send('{"res": '+value+'}');
  });
  
})


/*
UPDATE SCORE ROUTE
Go to <domain name>.repl.co/updatescore?score=5 to try
*/
app.get("/updatescore", (req, res) => {
  console.log('updating')
  console.log(req.query)
  db.set("score", req.query.score).then(() => {
    res.send("Success")
    console.log('success')
  });
})

app.get("/updateName", (req, res) => {
  console.log('updating name')
  console.log(req.query)
  db.set("hsName", req.query.name).then(() => {
    res.send("Success")
    console.log('success')
  });
})
app.get("/getName", (req, res) => {
  console.log('getting name')
  db.get("hsName").then(value => {
    res.send('{"res": '+value+'}');
  });
  
})


app.listen(3000, () => {
  console.log("server running")
})

