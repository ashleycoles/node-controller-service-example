// The job of this service is to handle all database interaction with the ToDos
const getAllTodos = (db, callback)=>{
    let collection = db.collection('todos')
    collection.find({}).toArray((err, documents)=>{
        callback(documents)
    })
}


module.exports.getAllTodos = getAllTodos