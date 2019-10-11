
exports.seed = function(knex) {
  return knex('Resources').insert([
    {name: 'track shoes', description: 'nike balh'},
    {name: 'Notebook', description: 'blajh'},
    {name: 'Piano', description: 'grand concert'},
    {name: 'Textbooks', description: 'Statistic year2'},
    
  ]);
};