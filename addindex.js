const {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";
const dbname = "lab";
const dbcol = "products";
const settings = {useNewUrlParser: true, useUnifiedTopology: true};

MongoClient.connect( url, settings, (error, client) => {
        if (error) {
            console.error("Didnt connect");
            throw error;
        }
        const collection = client.db(dbname).collection(dbcol);
        //const createMyIndex = {  category: 1, price: -1};
        const createSecondIndex = {name: -1};

        collection.createIndex(createSecondIndex, (err, result) => {
            if (err) {
                console.error("Didnt Work");
                throw err;
            }
            if (result) {
                console.log(result);
                client.close();
            }
        });
    }
);
