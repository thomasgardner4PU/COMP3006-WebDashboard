let express = require('express');
const mongoose = require("mongoose");
let router = express.Router();
let projectModel = require('../model/schema');

// POST method route
router.post('/newproject', function (req, res) {
    res.send('sending information back')
    console.log('information received')
    let newProject = new projectModel({
        projectTitle: req.body.title,
        projectFname: req.body.firstname,
        projectLname: req.body.lastname,
        projectDescription: req.body.description
    })

    try {
        newProject.save();
    } catch (e) {
        console.log(e);
    }

})

router.put('/updateproject', function (req, res) {
    res.send('updating project information')
    console.log('project information received')

})

// test api call goes here
router.get('/api/projects', async function (req, res){
    const projects = await projectModel.find();
    res.send(projects);
})

module.exports = router