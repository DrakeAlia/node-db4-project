
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        // {id: 1, colName: 'rowValue1'},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
        { name: 'eggs' },
        { name: 'olve oil' },
        { name: 'bacon' },
      ]);
    });
};
