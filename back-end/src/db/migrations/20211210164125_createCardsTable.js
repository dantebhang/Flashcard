exports.up = function(knex) {
  return knex.schema.createTable("cards", (table) => {
    table.increments("cardId").primary();
    table.string("front");
    table.string("back");
    table.integer("deck_id").unsigned().notNullable();
    table
      .foreign("deckId")
      .references("deckId")
      .inTable("decks")
      .onDelete("cascade");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("cards");
};
