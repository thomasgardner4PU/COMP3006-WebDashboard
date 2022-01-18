let express = require('express')
const mongoose = require("mongoose");
let router = express.Router();

//api call goes here

// create a data schema
const projectSchema = {
    projectId: parseInt,
    projectTitle: String,
    projectStatus: String,
    projectUserfname: String,
    projectUserlname: String,
    projectActivities: [
        String,
        String
    ]
}

const project = mongoose.model("project", projectSchema);

router.get("/api/projects", function (req, res){
    res.sendFile(__dirname + "/index");
})

router.post("/api/projects", function (req, res){
    let newProject = new project({
        projectId: req.body.projectId,
        projectTitle: req.body.projectTitle,
        projectStatus: req.body.projectStatus,
        projectUserfname: req.body.projectUserfname,
        projectUserlname: req.body.projectUserlname,
        projectActivities: req.body.projectActivities
    })
    newProject.save();
})


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