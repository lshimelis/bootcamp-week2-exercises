
// this is what it looked like before: exports.up = function(knex) {
exports.up = async knex => knex.schema.createTable('friends', table => {
    table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))
    table
        .uuid('user1')
        .notNullable()
        .references('users.id')
    table   
        .uuid('user2')
        .notNullable()
        .references('users.id')
    table  
        .enum('status', ['accepted', 'rejected','pending'])
        .notNullable()

})

exports.down = async knex => knex.schema.dropTableIfExists('friends')
