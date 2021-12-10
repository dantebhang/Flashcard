exports.up = function (knex) {
  return knex.schema.createTable("decks_cards)", (table) => {
    table.integer("deckId").unsigned().notNullable();
    table
      .foreign("deckId")
      .references("deckId")
      .inTable("decks")
      .onDelete("cascade");
    table.integer("cardId").unsigned().notNullable();
    table
      .foreign("cardId")
      .references("cardId")
      .inTable("cards")
      .onDelete("cascade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("decks_cards");
};
