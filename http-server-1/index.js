// This is used to import Express library from the internet
// After running command in terminal: -> npm install express
const express = require('express')
const app = express()       // an instance of express has been initialized
const port = 3000

// Get data from Server 
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// Listen the data came via 'port'
app.listen(port)

