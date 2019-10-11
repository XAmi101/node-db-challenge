const db = require("../data/dbConfig");

module.exports = {
 
    findProjects,
    findResources
    // findTasks,
    // addProject,
    // addResource,
    // addTask
}

function findProjects() {
    return db('projects')
}

function findResources() {
    return db('resources')
}


