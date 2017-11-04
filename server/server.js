const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, type: 'multipart/form-data*' }));

app.use('/', (req, res, next) => {
    console.log('Serve the survey html.');
    next();
});

app.post('/api/submitSurvey', (req, res) => {
    console.log(req.body);
    res.json({});
  }
);

app.listen(port, (error) => {
  if (error) {
    process.exit(1);
  }

  console.log(`server listening on port: ${port}`);
});