
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        // {id: 1, colName: 'rowValue1'},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
        {
          step_number: 1,
          instruction: 'pour little of olive olive on pan while heating',
          recipes_id: 1,
        },
        { step_number: 2, instruction: 'fry eggs on it', recipes_id: 1 },
        {
          step_number: 1,
          instruction: 'prepare pan and turn stove on',
          recipes_id: 2,
        },
        { step_number: 2, instruction: 'put bacon on it', recipes_id: 2 },
      ]);
    });
};
