const {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";
const dbname = "lab";
const dbcol = "products";
const settings = {useNewUrlParser: true, useUnifiedTopology: true};

MongoClient.connect( url, settings, ( err, client ) => {
        if (err) {
            console.error("didnt connect");
            throw err;
        }
        const collection = client.db(dbname).collection(dbcol);

        collection.remove( {}, (error, delOk) => {
            if (error) {
                console.error("Didnt Delete");
                throw error;
            }
            console.log(result);
            client.close();
        });
    }
);
