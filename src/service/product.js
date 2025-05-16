const { connection } = require('../database/connection');

async function getProducts() {

    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM producto;" ,(err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
  
}

module.exports = {
    getProducts
}