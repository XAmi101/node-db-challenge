
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('Projects').insert([
    {name: '5k Training', description: 'this is a couch to 5k challenge', completed: false},
    {name: 'Exam review', description: 'do practice problems for ch 3-4.', completed: false},
    {name: 'Piano', description: 'call tutor!', completed: false}
  ]);
};