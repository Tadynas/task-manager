const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, (error, client) => {
    if(error) {
        return console.log(`Unable to connect to database! ${error}`)
    }

    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 22
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})