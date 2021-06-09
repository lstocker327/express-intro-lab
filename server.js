const express = require('express');
const app = express();
const fs = require('fs');

app.engine('hypatia', (filePath, options, callback) =>{
  fs.readFile(filePath, (err, content)=>{
    if (err) return callback(err)

    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})

app.set('views', './views') 
app.set('view engine', 'hypatia')
