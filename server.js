let express = require("express");
let {engine} = require("express-handlebars");
let dotenv = require('dotenv');
let WebSocket = require("ws");
let bodyparser = require('body-parser');
const path = require("path");


let connectDB = require('./server/database/connection');
let projectSchema = require('./server/model/schema')

let app = express()

app.use(express.json());

//load public
app.use("/public", express.static(path.join(__dirname, "public")));

//Routes
let indexRouter = require('./server/routes')
let ProfileRouter = require('./server/routes/profile')
let projectsRouter = require('./server/routes/projects')
app.use('/', indexRouter)
app.use('/', ProfileRouter)
app.use('/', projectsRouter)


// dotenv security for DB connection
dotenv.config({path:'.env'})
let PORT = process.env.PORT || 8080

// mongoDB connection
connectDB();

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

