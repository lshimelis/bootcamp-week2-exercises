exports.up = async knex => knex.schema.createTable('posts', table => {
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
        .text('caption', 'shorttext')
        .notNullable()

})


exports.down = async knex => knex.schema.dropTableIfExists('posts')

