const express = require('express');
const app = express()
const bodyParser = require('body-parser');

const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', "ejs");

app.get('/', (req, res) => {
  res.render('landing');
});

// app.use("/views/landing", landing)

app.listen(PORT, () =>{
  console.log(`Server is listening on port ${PORT}`)
});
