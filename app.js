const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const path = require('path');

const indexRouter = require('./routes/routes');

//Extra
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

  app.listen(3000, function(){
    console.log('I am alive - http://localhost:3000')
    console.log('Static file at - http://localhost:3000/IRWEBDEV.html')
  });
