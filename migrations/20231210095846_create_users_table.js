// migrations/create_users_table.js
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('email');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };
  