
exports.up = function(knex, Promise) {
  return knex.schema.createTable('positives', function(table) {
    table.increments();
    table.string('phrase');
    table.string('author_name');
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('positives');
};
