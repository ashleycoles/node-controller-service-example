const TodosController = require('../Controllers/ToDosController');

//pass the whole application into this function
const routes = (app) => {
    //adding specific routes

    //calling the method on the controller
    app.get('/todos', TodosController.getTodos)

}

//making it available to be used in app.js
module.exports = routes;