let express = require("express")
const {engine} = require("express-handlebars");
let dotenv = require('dotenv');
const connectionStr = "mongodb://localhost:27017/comp3006"
const{MongoClient} = require("mongodb");
let app = express()

//load public
const path = require("path");
app.use("/public", express.static(path.join(__dirname, "public")));


//Routes
let indexRouter = require('./routes')
let ProfileRouter = require('./routes/profile')
let usersRouter = require('./routes/users')
let projectsRouter = require('./routes/projects')
app.use('/', indexRouter)
app.use('/', ProfileRouter)
app.use('/', usersRouter)
app.use('/', projectsRouter)


// set view engine
app.set('view engine', 'handlebars');
app.engine('handlebars', engine());
app.set('views', './views');
app.use(express.static('public'))


// dotenv security for DB connection
dotenv.config({path:'.env'})
let PORT = process.env.PORT || 8080


//connection to database
let mongoose = require('mongoose');
mongoose.connect(
    connectionStr,
    // { useNewUrlParser: true },
    () => console.log('connected to db!'))


// server listening port
app.listen(PORT,()=>{console.log(`Server is running on http://127.0.0.1:${PORT}`)})

