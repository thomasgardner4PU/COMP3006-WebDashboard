let express = require('express')
let router = express.Router();

router.get('/api/profile', function (req, res){
    res.render('profile');
})

module.exports = router