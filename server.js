let express = require("express");
const mongoose = require('mongoose');
let {engine} = require("express-handlebars");
let dotenv = require('dotenv');
let WebSocket = require("ws");
let morgan = require('morgan')
let bodyparser = require('body-parser');
let connectDB = require('./connection');
let projectSchema = require('./server/model/schema')

let app = express()

app.use(express.json());

//load public
const path = require("path");
app.use("/public", express.static(path.join(__dirname, "public")));

//Routes
let indexRouter = require('./server/routes')
let ProfileRouter = require('./server/routes/profile')
let usersRouter = require('./server/routes/users')
let projectsRouter = require('./server/routes/projects')
app.use('/', indexRouter)
app.use('/', ProfileRouter)
app.use('/', usersRouter)
app.use('/', projectsRouter)


// dotenv security for DB connection
dotenv.config({path:'.env'})
let PORT = process.env.PORT || 8080

// mongoDB connection
connectDB();

// //log requests
// app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true }))

// set view engine
app.set('view engine', 'handlebars');
app.engine('handlebars', engine());
app.set('views', './views');
// load assets
app.use(express.static('public'))


// server listening port
app.listen(PORT,()=>{console.log(`Server is running on http://127.0.0.1:${PORT}`)})

