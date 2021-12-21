let express = require('express')
let router = express.Router();

//api call goes here

router.get('/api/users', function (req, res) {
    res.send([
        {
            id: 1,
            name: "Thomas",
            age: 25,
            email: "thomasgardner47@gmail.com"
        },

        {
            id: 2,
            name: "David",
            age: 24,
            email: "davidsemail@test.com"
        },

        {
            id: 3,
            name: "Jacub",
            age: 22,
            email: "jacubemail@test.com"
        }
    ])
})

module.exports = router