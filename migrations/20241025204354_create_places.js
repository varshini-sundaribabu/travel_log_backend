export const up = (knex) => {
  return knex.schema.createTable('places', (table) => {
    table.increments('id').primary();
    table.integer('diary_id').unsigned().notNullable();
    table.string('name').notNullable();
    table.text('description');
    table.string('image');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('edited_at').defaultTo(knex.fn.now());
    
    table.foreign('diary_id').references('id').inTable('diaries').onDelete('CASCADE');
  });
};

export const down = (knex) => {
  return knex.schema.dropTable('places');
};
