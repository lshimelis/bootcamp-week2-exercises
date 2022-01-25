exports.up = async knex => knex.schema.createTable('comments', table => {
    table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))
    table
        .uuid('user')
        .notNullable()
        .references('users.id')
    table   
        .timestamp(true)
        .notNullable
    table
        .text('comment', 'shorttext')
        .notNullable()

})


exports.down = async knex => knex.schema.dropTableIfExists('comments')
