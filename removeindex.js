const {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";

const dbname = "lab";
const dbcol = "products";
const settings = {useNewUrlParser: true, useUnifiedTopology: true};

MongoClient.connect( url, settings, (error, client) => {
        if (error) {
            console.error("Could not connect");
            throw error;
        }

        const collection = client.db(dbname).collection(dbcol);
        const drop = {price: 1};

        collection.dropIndex(drop, (err, result) => {
            if (err) {
                console.error("wops");
                throw err;
            }
            console.log(result);
        });
    }
);
