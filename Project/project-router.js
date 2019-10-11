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