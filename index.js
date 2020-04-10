let express = require('express');
let app = express();
let methodOverride = require('method-override')
//use ejs
app.set('view engine', 'ejs')
// app.use(ejsLayouts)
//serve some static files
app.use(express.static('static'))
app.use(methodOverride('_method'))
//app for body-parser
app.use(express.urlencoded({extended: false}))
//include the controllers routes
app.use('/dinosaurs', require('./controllers/dinosaurs'))
app.listen(3000);