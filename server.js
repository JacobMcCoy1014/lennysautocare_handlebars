// Load the express module.
const express = require('express');

// Create an Express application.
const app = express();

// Set up the Handlebars view engine.
app.set('view engine', 'hbs');

// Create a variable that stores the port number (i.e., 1337).
const port = 1337;

// Create a variable that stores the path to the “public” directory inside your “myExpressSite” directory.
const publicDirPath = __dirname + '/myExpressSite/public';

// Specify “css” as a root directory from which to serve static files.
app.use('/css', express.static(publicDirPath + '/css'));

// Specify “images” as a root directory from which to serve static files.
app.use('/images', express.static(publicDirPath + '/images'));

// Specify “js” as a root directory from which to serve static files.
app.use('/js', express.static(publicDirPath + '/js'));

// Render each template and send the appropriate data from the server side based on the path that a user has navigated to.
app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Adds a catch-all handler that sets the status code explicitly and renders the view for a custom 404 page.
app.use((req, res) => {
  res.status(404);
  res.render('404', { title: '404 Not Found' });
});

// Adds a 500 error handler that sets the status code explicitly and renders the view for a custom 500 page.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render('500', { title: '500 Internal Server Error' });
});

// Make the app listen on the port and output the URL to access the server to the console.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});