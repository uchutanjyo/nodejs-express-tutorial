const fs = require('fs');
const path = require('path');

 const p = path.join(
      path.dirname(require.main.filename),
      'data',
      'products.json'
    );

  const getProductsFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return cb([]);
      } else  {
      cb(JSON.parse(fileContent));
      }
    });
  }

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile(products => {
products.push(this);
fs.writeFile(JSON.stringify(products), err => {
  console.log(err)
})
      })
    fs.readFile(p, (err, fileContent) => {
    });
  }


   static fetchAll(cb) {
  getProductsFromFile(cb)
   }
};