exports.seed = function(knex) {
	// Deletes ALL existing entries
  return knex('recipes_ingredients').truncate()
  .then(function() {
		// Inserts seed entries
		return knex('recipes_ingredients').insert([
			// {id: 1, colName: 'rowValue1'},
			// {id: 2, colName: 'rowValue2'},
			// {id: 3, colName: 'rowValue3'}
			{ quantity: 'two eggs', recipes_id: 1, ingredients_id: 1 },
			{
				quantity: 'one table sppon of olive oil',
				recipes_id: 1,
				ingredients_id: 2
			},
			{
				quantity: 'three pancakes please',
				recipes_id: 2,
				ingredients_id: 3
			}
		]);
	});
};
