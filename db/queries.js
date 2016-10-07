var knex = require('./knex.js')

function addHappy(phrase, author) {
  return knex('positives').insert({
    'phrase': phrase,
    'author_name':author
  });
}
function getAll() {
  return knex('positives')
}



module.exports = {
  addHappy: addHappy,
  getAll: getAll
}
