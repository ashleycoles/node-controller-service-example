// The job of this service is to provide a database connection elsewhere in the application
const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://root:password@localhost:27017'
const dbname = 'todos'
const Client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true})


const connectToDb = (callback) => {
    Client.connect((cb)=> {
        let db = Client.db(dbname)
        callback(db)
    })
}

module.exports = connectToDb;