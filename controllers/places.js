const router = require('express').Router();

router.get('/', (req,res) => {
    let places = [{
        name: 'Daves Hot Chicken',
        city: 'Los Angeles',
        state: 'California',
        cuisines: 'Fried Chicken',
        pic: '/images/daveshot.png'
    }, {
        name: 'Tian You Fang',
        city: 'West Covina',
        state: 'California',
        cuisines: 'Chinese',
        pic: '/images/baobuns.jpg'
    }];
    res.render('places/index', { places });
});

module.exports = router;