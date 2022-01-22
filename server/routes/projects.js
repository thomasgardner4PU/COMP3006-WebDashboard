let express = require('express')
const mongoose = require("mongoose");
let router = express.Router();


// create data schema
let projectsSchema = new mongoose.Schema({
    _id: false,
    Title: {
        type: String,
        required: true
    },
    projectFname: {
        type: String,
        required: true,
        unique: true
    }
})

let projects = mongoose.model("projects", projectsSchema);


//api call goes here
// router.get('/api/projects', function (req, res){
//     res.send([
//         {
//             projectId: 1,
//             projectTitle: "COMP3005",
//             projectStatus: "1 Day ago",
//             projectActivities: [
//                 "Coming Soon",
//                 "Book Cover"
//             ],
//         }
//     ])
// })

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

module.exports = router