let express = require('express')
let router = express.Router();

//api call goes here

router.get('/api/projects', function (req, res){
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

module.exports = router