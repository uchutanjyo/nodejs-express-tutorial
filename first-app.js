const path = require('path')

const ejs = require('ejs');

const errorController = require('./controllers/error')


const express = require('express')
const bodyParser = require('body-parser')

const app = express();


app.set('view engine', 'ejs');
// registers ejs as engine
app.engine('ejs', require('ejs').__express);
// for SOME reason, this made it work. not sure why it's nto in the tutorial, but i'll try to find out later.
app.set('views', 'views');
// this is actually the default setting, so don't need to include this if using views folder


//  the ejs code is generated ON THE SERVER, not on the browser (when you check the source code in browser, there is no ejs to  be found)
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')


app.use(bodyParser.urlencoded({extended: false}))
// this parses the body 
app.use(express.static(path.join(__dirname, 'public')))
// creates path to public directory

// this filter lets us implicitly use this common route without having to type it every time in admin.js
app.use('/admin', adminRoutes);
app.use(shopRoutes)

app.use(errorController.get404)

// sendFile(path.join(__dirname, 'views', '404.html'))

app.listen(3000)

// server.listen(3000);

