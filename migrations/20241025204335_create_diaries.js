export const up = (knex) => {
  return knex.schema.createTable('diaries', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.string('name').notNullable();
    table.text('description');
    table.string('cover_image');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('modified_at').defaultTo(knex.fn.now());
    
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
  });
};

export const down = (knex) => {
  return knex.schema.dropTable('diaries');
};
