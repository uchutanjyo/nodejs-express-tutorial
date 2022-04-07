const path = require('path')
const express = require('express')

const productsController = require('../controllers/products')

const router = express.Router()



// implicitly reached
router.get('/add-product', productsController.getAddProduct 
)


// implicitly reached
router.post('/add-product', productsController.postAddProduct

)

// these router.  function basically exactly as app.get/use


module.exports = router;
