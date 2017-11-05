const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8086;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, type: 'multipart/form-data*' }));

app.use((req, res, next) => {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.use('/', (req, res, next) => {
    console.log('Serve the survey html.');
    next();
});

app.post('/api/submitSurvey', (req, res) => {
    console.log(req.body);
  }
);

app.listen(port, (error) => {
  if (error) {
    process.exit(1);
  }

  console.log(`server listening on port: ${port}`);
});