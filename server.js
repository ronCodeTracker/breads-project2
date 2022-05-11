
// Name:   Ronald Kiefer
// Hebrew name:    ר ו נ  א ל ד    
// Date:   February 24, 2022 Thursday
// update: May 10, 2022
// Description:  bread App for Boot Camp Back End 
// Description:  Module 3 code along


// DEPENDENCIES
const express = require('express')

// DEPENDENCIES
const methodOverride = require('method-override')
console.log(process.env.PORT)
console.log(process.env.MONGO_URI)


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

//Mongoose ODM
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)


const app = express()



// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// MIDDLEWARE
app.use(express.static('public'))
// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))

// MIDDLEWARE
app.use(methodOverride('_method'))

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
})



// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// 404 Page

app.get('*', (req, res) => {
    res.send('404404')
})


// LISTEN
app.listen(PORT, () => {
    console.log('Nomming at port', PORT);
})


