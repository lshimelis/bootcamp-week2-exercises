exports.up = async knex => knex.schema.createTable('reactions', table => {
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
        .enum('status', ['liked', 'disliked','laughed','loved'])
        .notNullable()

})


exports.down = async knex => knex.schema.dropTableIfExists('reactions')