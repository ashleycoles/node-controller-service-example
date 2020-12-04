//this is the file that you need to run if you actually want to start the app
//run nodemon on this file

//bringing in the app that we created
const app = require('./app');
//choosing a port to run on
const PORT = 8000;

//initialising the app
app.listen(PORT, ()=> console.log(`App is now running on port ${PORT}`))