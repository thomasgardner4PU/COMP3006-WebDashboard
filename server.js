let express = require("express")
const {engine} = require("express-handlebars");

let app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/profile', function (req, res){
    res.render('profile');
})

app.get('/users', function (req, res) {
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

app.listen(8000)

