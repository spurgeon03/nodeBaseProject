const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Hola mundo') 
})

app.listen(3000, () => {
    console.log("running at: 3000");
})