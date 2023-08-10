const router = require('express').Router();

router.get('/', (req,res) => {
    let places = [{
        name: 'ShmackinBurger',
        city: 'Los Angeles',
        state: 'California',
        cuisines: 'Fried Chicken',
        pic: '/images/burger.jpg'
    }, {
        name: 'BombBurger',
        city: 'West Covina',
        state: 'California',
        cuisines: 'Chinese',
        pic: '/images/burgerwmayo.jpg'
    }];
    res.render('places/index', { places });
});

module.exports = router;