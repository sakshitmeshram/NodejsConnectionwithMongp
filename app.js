const dbConnect = require("./MongodbConnection");

const insertData = async () => {
    const collection = await dbConnect();
    let result = await collection.insertOne(
        
        {name:"john",age:30,email:"john@example.com"}
    )
    console.log(result);
}

insertData();


