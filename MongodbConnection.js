const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string

const dbName = 'local'; // Replace with your database name
const client = new MongoClient(uri);


const dbConnect = async () => {
    let result = await client.connect();
    let db = result.db(dbName);
    return db.collection('product');
}

module.exports = dbConnect;