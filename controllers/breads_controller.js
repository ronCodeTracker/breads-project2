



const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    Bread.find()
        .then(foundBreads => {
            res.render('Index',
                {
                    breads: foundBreads,
                    title: 'Index Page'
                }
            )
        })
    
    // res.send(Bread)
})

// EDIT
breads.get('/:id/edit', (req, res) => {
    const bread = Bread.findById(req.params.id)
        .then(bread => {
            console.log(bread)
            res.render('edit', {
                bread: bread
                
            })
        }).catch(err => {
            res.send('404')
        })
    
})


// CREATE
breads.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.image) {
        req.body.image = undefined
    }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten === 'true'
  } else {
    req.body.hasGlutten === 'false'
  }
  Bread.create(req.body)
  res.redirect('/breads')
})

// NEW
breads.get('/new', (req, res) => {
    console.log('newConsole')
    res.render('new')
})




// SHOW
breads.get('/:id', (req, res) => {
    const bread = Bread.findById(req.params.id)
        .then(bread => {
            console.log(bread)
            res.render('Show', {bread: bread})
        }).catch(err => {
            res.send('404')
        });

    //if (Bread[req.params.arrayIndex]) {
    //    res.render('Show', {
    //        bread: Bread[req.params.arrayIndex],
    //        index: req.params.arrayIndex
    //    })
    //} else {
    //    res.send('404?')
    //}
})


// DELETE
breads.delete('/:indexArray', (req, res) => {
    console.log('delete working')
    Bread.splice(req.params.indexArray, 1)
    res.status(303).redirect('/breads')
})

// UPDATE
breads.put('/:id', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.updateOne().then(() => res.redirect(`/breads/${req.params.id}`))
    res.redirect(`/breads/${req.params.arrayIndex}`)
})


module.exports = breads


