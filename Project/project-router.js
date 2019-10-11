const express = require('express');

const Data = require('./project-model.js');

const router = express.Router();

router.get('/', (req,res) => {
    Data.findProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.get('/resources', (req, res) => {
    Data.findResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.get('/tasks', (req, res) => {
    Data.findTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/', (req,res) => {
    const change = req.body;

    Data.addProject(change)

        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/resources', (req,res) => {
    const change = req.body;

    Data.addResource(change)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/tasks', (req,res) => {
    const change = req.body;

    Data.addTask(change)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router;