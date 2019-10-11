
exports.up = function(knex) {
  return knex.schema.createTable("Tasks", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.text("notes");
      tbl.boolean("completed").defaultTo(false);
      tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Projects");
  })

  .createTable("Projects", tbl => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
    tbl.text("description");
    tbl.boolean("completed").defaultTo(false);
})

.createTable("Resources", tbl => {
    tbl.increments();
    tbl.string("name", 128).notNullable().unique();
    tbl.text("description");
})

.createTable("tasksProjects", tbl => {
    tbl.increments();
    tbl.integer('task_id')
      .unsigned()
      .references('id')
      .inTable('Tasks')
    tbl.integer('project_id')
      .unsigned()
      .references('id')
      .inTable('Project')
})

  
};


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasksProjects')
    .dropTableIfExists('Resources') 
    .dropTableIfExists('Tasks')
    .dropTableIfExists('Projects')
    
};
