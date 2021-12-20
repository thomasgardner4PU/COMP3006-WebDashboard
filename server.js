let express = require("express")
const {engine} = require("express-handlebars");
let mongoose = require('mongoose');
require('dotenv/config');


let indexRouter = require('./routes/index')

let app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'))

app.use('/', indexRouter)

//routes

// app.get('/', function (req, res) {
//     res.render('index');
// })

app.get('/profile', function (req, res){
    res.render('profile');
})

app.get('/api/users', function (req, res) {
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

app.get('/api/projects', function (req, res){
    res.send([
        {
            projectId: 1,
            projectTitle: "COMP3005",
            projectDescription: "hello world, I am a computer communicating with a human",
            projectActivities: [
                "Coming Soon",
                "Book Cover"
            ],
        }
    ])
})

// app.post('/api/projects', function (req, res){
//     res.send([
//         {
//             projectId: 2,
//             projectTitle: "COMP3008",
//             projectDescription: "this is a test project",
//             projectActivities: [
//                 "Coming soon",
//                 "Assignment Notes"
//             ],
//         }
//     ])
// })

const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));

// connection to database

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to db'))

app.listen( process.env.PORT || 8000)

