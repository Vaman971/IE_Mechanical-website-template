const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");
const port = 80;


app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'html'));

// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get("/",(req,res)=>{
  const params = { };
    res.status(200).render('index.html', params);
})

app.get("/event",(req,res)=>{
  const params = { };
  res.status(200).render('event.html', params);
})

app.get("/team",(req,res)=>{
  const params = { };
    res.status(200).render('team.html', params);
})

app.listen(port, ()=>{
  console.log(`The application is running on port ${port}`)
})