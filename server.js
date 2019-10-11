const express = require('express');

const server = express();



const router = require("./Project/project-router.js")
server.use(express.json());
server.use("/api", router);


server.get('/', (req, res) => {
    res.status(200).json({message: "Let's get Started!"})
})



module.exports = server;