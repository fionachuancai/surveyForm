# surveyForm
Two step survey form, backend use nodejs, frontend use reactjs.

# Introduction
* A 2 steps form web application. 
* Backend using Nodejs, Expressjs.
* Frontend using gulp as task runner, webpack as bundler. reactstrap as UI libarary. axios for communicating with the backend.

# How to run?
1. `cd surveyForm/server && npm(yarn) install && npm start` to start the server
2. open a new terminal and `cd surveyForm/client && npm(yarn) install && gulp` (or gulp watch) to build the frontend and generate the bundle file
3. open a new terminal within the client folder and `npm start` to start the front end webpack-dev-server, mannually open the broswer (sorry), and type the url follewed by the webpack-dev-server console (usually [http://localhost:8080/]([http://localhost:8080/) by default)
4. at the browser answer the form one by one after press the submit button you can see your form data been logged at your server.

# Things to improve
1. The app need to be polished. The page is not very pretty at the moment. Should add css preprocessor.

2. The form is responsive, it looks nice and responsive in the browser. but it looks very small on mobile devices. Since this is the first time i use the UI lib 'reactstrap', i am not very familiar with it. Alternatively I can use 'media queries' for future improvements or use another lib.

3. No form control at the moment. Should check the data's validation before post it to the server.

4. Should add linting and unit test.

5. Should add front-end router.

6. ...And a lot more.
