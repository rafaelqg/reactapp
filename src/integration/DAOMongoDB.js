const {MongoClient} = require('mongodb');
//const uri = "mongodb://localhost:27017";//$ mongo mongodb://<host>:<port>
const uri = "mongodb+srv://mongo:xxxxxxxx@cluster0.xkbdmmm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
class DAOMongoDB{
    getAllEmployees = async function(){
        try{
            await client.connect();
          //  console.log("Connecting...", client);
            let db=client.db("company");//access or create a new database
          //  console.log("db", db);
            let collection = db.collection('employees');// access or create a new collection
            let queryObject={};
            let cursor=collection.find(queryObject);
            //console.log("cursor", cursor);
            return await cursor.toArray();
        }catch (e){
            console.log(e);
            return [];
        }
    }

    insertTestObjects= function (){
        let db=client.db("company");//access or create a new database
        let collection = db.collection('employees');// access or create a new collection
        //insert objects
        let employee = {
            name: "Mickey",
            lastName: "Mouse"
        }    
        
        collection.insertOne(employee, function(err, res) { //add document to collection
            if (err != undefined) throw err;
            console.log("1 document inserted");
        });

        employee={
            fullName: "Donald Duck",
        }    
        
        collection.insertOne(employee, function(err, res) { //add document to collection
            if (err != undefined) throw err;
            console.log("1 document inserted");
        });
    }
}

module.exports = DAOMongoDB;
