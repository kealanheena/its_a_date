const express = require('express');
const app = express()
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json());
app.set('view engine', "html");

app.get('/', (req, res) => {
  req.render('blah');
})

app.listen(PORT, () =>{
  console.log(`Server is listening on port ${PORT}`)
});