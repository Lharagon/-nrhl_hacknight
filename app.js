const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
ejs = require('ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
  res.send('hello')
});

app.listen(3000, ()=>{
  console.log('Server is listening...')
})
