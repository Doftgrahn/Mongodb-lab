const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const dbname = "lab";
const dbcol = "products";

const settings = { useNewUrlParser: true, useUnifiedTopology: true };

const generateProduct = () => {
    // _id, namn, pris och kategori

    const name = ["balloon", "bicycle", "hammer", "wrench"];
    const category = ["hobby", "work", "professional"];
    const randomElement = list => {
        let r = Math.random() * list.length;
        return list[Math.floor(r)];
    };

    let c = randomElement(name);
    let m = randomElement(category);
    const price = Math.floor(Math.random() * 200) + 20;

    let final = {name: c, category: m, price: price};
    return final;
};

MongoClient.connect( url, settings, (err, client) => {
        if (err) {
            console.error("Didnt Connect");
            throw err;
        }
        const collection = client.db(dbname).collection(dbcol);
        let n = 1;
        let products = [];
        for (let i = 0; i < n; i++) {
            products.push(generateProduct());
        }

        collection.insertMany(products, (error, result) => {
            if (error) {
                console.error("Something went Wrong", error);
            }
            console.log("inserted : ", result);
        });
    }
);
