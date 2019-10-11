
exports.seed = function(knex) {
  return knex('Resources').insert([
    {name: 'track shoes', description: 'nike bal'},
    {name: 'Notebook', description: 'the disc-bound from HP'},
    {name: 'Piano', description: 'grand concert'},
    {name: 'Textbooks', description: 'Statistic year2'}
    
  ]);
};