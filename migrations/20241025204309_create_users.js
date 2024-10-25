exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.date('date_of_birth').notNullable();
      table.string('email').unique().notNullable();
      table.string('phone_number').notNullable();
      table.string('password').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  