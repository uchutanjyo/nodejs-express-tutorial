const path = require('path')

const express = require('express')

const productsController = require('../controllers/products')

// const rootDir = require('../util/path')
// // constructs path to root directory

// const adminData = require('./admin')

const router = express.Router()



// this is how to route an html file
router.get('/', productsController.getProducts
  // renders template ^ , looks for registered engine (ejs) in app.js
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
)


module.exports = router;