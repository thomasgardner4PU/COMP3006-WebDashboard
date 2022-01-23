const mongoose = require("mongoose");
const {Schema} = mongoose;

let projectSchema = new mongoose.Schema({
    projectTitle:{
        type: String,

    },
    projectFname:{
        type: String,

    },
    projectLname:{
        type: String,

    },
    projectDescription:{
        type: String,
    }
});

let projectModel = mongoose.model('projects', projectSchema);

module.exports = projectModel