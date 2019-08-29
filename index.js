const {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";
const dbname = "shop";
const dbcol = "books";
const settings = { useNewUrlParser: true, useUnifiedTopology: true };

MongoClient.connect( url, settings, (err, client) => {
        if (err) {
            console.error("Didnt connect");
            throw err;
        }
        const collection = client.db(dbname).collection(dbcol);
        collection.find({}).toArray((error, docs) => {
            if (error) {
                console.error("Could not get collection", error);
            }

            let result = docs.map(doc => doc.name);
            result.forEach(name => console.log(">" + name));
            client.close();
        });
    }
);
