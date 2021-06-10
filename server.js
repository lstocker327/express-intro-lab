const express = require('express');
const app = express();
const fs = require('fs');


app.engine('hypatia', (filePath, options, callback) =>{
  fs.readFile(filePath, (err, content)=>{
    if (err) return callback(err)

    let rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.heading + '</h1>').replace('#content#','<div>'+ options.animalInfo + '</div>' )
    
    return callback(null, rendered)
  })
})

app.set('views', './views')
app.set('view engine', 'hypatia')

// app.get('/', (req, res) => {
//   res.render('temp2', { title: 'animalList', heading: 'Links', links: ['/animal1','/animal2','/animal3','/animal4','/animal5','/animal6',
//                                                                       '/animal7','/animal8','/animal9','/animal10',]  })
// })

app.get('/animal1', (req, res) => {
  res.render('temp1', { title: 'animal1', heading: 'Giraffe', animalInfo: 'very tall, this is an evolutionary adaptation to reach food on high branches.' })
})

app.get('/animal2', (req, res) => {
  res.render('temp1', { title: 'animal2', heading: 'Elephant', animalInfo: 'has a long snout' })
})

app.get('/animal3', (req, res) => {
  res.render('temp1', { title: 'animal3', heading: 'Zebra', animalInfo: 'has stripes' })
})

app.get('/animal4', (req, res) => {
  res.render('temp1', { title: 'animal4', heading: 'Lion', animalInfo: 'King of the Jungle' })
})

app.get('/animal5', (req, res) => {
  res.render('temp1', { title: 'animal5', heading: 'Panther', animalInfo: 'The Catskills are home to american panthers' })
})

app.get('/animal6', (req, res) => {
  res.render('temp1', { title: 'animal6', heading: 'Ape', animalInfo: 'Our DNA is 98% Ape' })
})

app.get('/animal7', (req, res) => {
  res.render('temp1', { title: 'animal7', heading: 'Penguin', animalInfo: 'Male penguins attract female penguins by making elaborate nests' })
})

app.get('/animal8', (req, res) => {
  res.render('temp1', { title: 'animal8', heading: 'Tigers', animalInfo: 'also has stripes' })
})

app.get('/animal9', (req, res) => {
  res.render('temp1', { title: 'animal9', heading: 'Pacific Footballfish', animalInfo: 'aka the light bulb fish this fish has a luminescent bulb to attract prey' })
})

app.get('/animal10', (req, res) => {
  res.render('temp1', { title: 'animal10', heading: 'Iguana', animalInfo: 'Iguanas like Salamanders, can grow a new tail' })
})


app.listen(3000, function(){
  console.log('listening on port 3000');
});
