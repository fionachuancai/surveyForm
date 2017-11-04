const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, (error) => {
  if (error) {
    process.exit(1);
  }

  console.log(`server listening on port: ${port}`);
});