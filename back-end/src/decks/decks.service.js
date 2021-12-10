const knex = require('../db/connection');

function list(){
  return knex("decks").select();
}

function create(deck){
  return knex("decks")
    .insert(deck)
    .returning("*")
    .then((createdDeck) => createdDeck[0]);
}

function read(deckId){
  return knex("decks")
    .select()
    .where({ deckId })
    .first()
}

function update(updatedDeck){
  return knex("decks")
    .select()
    .where({ deckId: updatedDeck.deckId })
    .update(updatedDeck, "*")
    .then((updatedDeck) => updatedDeck[0])
}

function destroy(deckId){
  return knex("decks")
    .where({ deckId })
    .del()
}


module.exports = {
  list, 
  create,
  read,
  update, 
  delete: destroy, 
}