
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl=>{
        //id
        tbl.increments()
        //vin number
        tbl.text('vin', 17)
            .unique()
            .notNullable()
        //make
        tbl.text('make', 50).notNullable()
        //model
        tbl.text('model', 50).notNullable()
        //mileage
        tbl.integer('miles').notNullable()
        //transmission
        tbl.text('transmission', 40)
        //title
        tbl.text('title', 40)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
