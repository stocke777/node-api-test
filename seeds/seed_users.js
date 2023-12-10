// seeds/seed_users.js
exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Doe', email: 'jane@example.com' },
      ]);
    });
};
