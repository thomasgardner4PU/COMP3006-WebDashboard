const mongoose = require('mongoose');

//connection to database
let connectDB = async () => {
    try {
        // mongodb connection string
        let con = await mongoose.connect(process.env.DB_CONNECTION);
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB