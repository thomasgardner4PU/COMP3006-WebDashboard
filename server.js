let express = require("express")
const {engine} = require("express-handlebars");
let dotenv = require('dotenv');
let app = express()

//load public
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));


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
// app.set("views", path.resolve(__dirname, "views"))


// dotenv security for DB connection
dotenv.config({path:'.env'})
let PORT = process.env.PORT || 8080


//connection to database
let mongoose = require('mongoose');
mongoose.connect(
    process.env.DB_CONNECTION,
    // { useNewUrlParser: true },
    () => console.log('connected to db!'))

// let db = mongoose.connection
// db.on('error', error => console.log(error))
// db.once('open', error => console.log('connected to mongoose'))


// server listening port
app.listen(PORT,()=>{console.log(`Server is running on http://127.0.0.1:${PORT}`)})

