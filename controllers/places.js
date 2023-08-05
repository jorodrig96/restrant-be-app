const router = require('express').Router();

router.get('/', (req,res) => {
    let places = [{
        name: 'Daves Hot Chicken',
        city: 'Los Angeles',
        state: 'California',
        cuisines: 'Fried Chicken',
        pic: 'https://www.fox21news.com/wp-content/uploads/sites/37/2023/06/Daves-Hot-Chicken-tray.jpg?w=1920&h=1440&crop=1'
    }, {
        name: 'Tian You Fang',
        city: 'West Covina',
        state: 'California',
        cuisines: 'Chinese',
        pic: 'https://emeals-menubuilder.s3.amazonaws.com/v1/recipes/500805/pictures/large_steamed-pork-and-shrimp-wontons.jpg'
    }];
    res.render('places/index', { places });
});

module.exports = router;