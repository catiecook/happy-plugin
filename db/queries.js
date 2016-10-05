var knex = require('./knex.js')

function addHappy(phrase, author) {
  return knex('positives').insert({
    'phrase': phrase,
    'author_name':author
  });
}

module.exports = {
  addHappy: addHappy
}
