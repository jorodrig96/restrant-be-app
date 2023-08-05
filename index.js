require('dotenv').config();

const express = require ('express')
const app = express();

app.use('/places', require('./controllers /places'));

app.get('/', (req,res) => {
    res.send(`
    <h1> Currently in my home route. </h1> `);
});

app.get('*', (req, res) => {
    res.status(404).send(` 
    <h1> ERROR 404, page does not exist! </h1> `
    );
});

app.listen(process.env.PORT, () => {
    console.log("Hello, this is your terminal.")
});