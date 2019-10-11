const db = require("../data/dbConfig");

module.exports = {
 
    findProjects,
    findResources,
    findTasks,
    addProject,
    addResource,
    addTask
}

function findProjects() {
    return db('projects')
}

function findResources() {
    return db('resources')
}

function findTasks() {
    return db('tasks as t')
        // .join('projects as p', 't.Project_id', '=', 'p.projects.id')
        // .select('tasks.id', 'tasks.name', 'tasks.notes', 'tasks.completed', 'p.project_name')
        // .where({project_id: id})
}

function addProject(project){
    return db("projects")
    .insert(project, "id")
   
}


function addResource(resource) {
    return db('resources')
    .insert(resource, "id")
}

function addTask(task) {
    return db('tasks').insert(task)
}