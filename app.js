const dbConnect = require("./MongodbConnection");

const insertData = async () => {
    const collection = await dbConnect();
    let result = await collection.insertOne(
        
        {name:"john",age:30,email:"john@example.com"}
    )
    console.log(result);
}

// function insert async () => {



//     collection.insertOne(
//      ,
//         (err, result) => {
//             if (err) {
//                 console.error('Error inserting document:', err);
//                 return;
//             }
//             console.log('Document inserted:', result.insertedId);
//         }
//     );
// }

insertData();


