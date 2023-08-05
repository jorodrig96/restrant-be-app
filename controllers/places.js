const router = require('express').Router();

router.get('/', (req,res) => {
    res.send(`
    <h1> This is my /controllers/places.js page. Used a router to get here.</h1>`);
});

module.exports = router;