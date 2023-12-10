// seeds/..._seed_posts.js
exports.seed = function (knex) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        { title: 'First Post', content: 'Lorem ipsum dolor sit amet.', user_id: 1 },
        { title: 'Second Post', content: 'Consectetur adipiscing elit.', user_id: 2 },
      ]);
    });
};
