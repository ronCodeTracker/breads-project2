
// Name:   Ronald Kiefer
// Hebrew name:    ר ו נ  א ל ד    
// Date:   February 24, 2022 Thursday
// Description:  bread App for Boot Camp Back End 
// Description:  Module 3 code along


// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// MIDDLEWARE
app.use(express.static('public'))
// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
})



// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)


// 404 Page

app.get('*', (req, res) => {
    res.send('404404')
})


// LISTEN
app.listen(PORT, () => {
    console.log('Nomming at port', PORT);
})


