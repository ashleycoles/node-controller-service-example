//bring in all the things this controller needs to work
const DbService = require('../Services/DbService');
const ToDosService = require('../Services/ToDosService');

//one of the methods on a controller
//handles the req + sets the response
const getTodos = (req, res)=>{
    DbService((db)=>{
        ToDosService.getAllTodos(db, (documents) => {
            // console.log(documents)
            res.json(documents)
        })
    })
}

//make it available in the routes.js file
module.exports.getTodos = getTodos