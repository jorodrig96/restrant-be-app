require('dotenv').config();

const express = require ('express')
const app = express();

app.get('/', (req, res) => {
    console.log('Currently in my terminal route.');
});

app.get('/', (req,res) => {
    res.send('This is my home page')
})
app.listen(process.env.PORT);