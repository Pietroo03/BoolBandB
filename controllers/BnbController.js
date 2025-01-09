// import connection
const connection = require('../database/connection');


// index
function index(req, res) {

    // db query 
    const sql = `SELECT * FROM appartamenti`;

    // execute the sql query
    connection.query(sql, (err, results) => {
        // error
        if (err) return res.status(500).json({ err: err })

        // response object
        res.status(200).json({
            count: results.length,
            data: results
        })
    })
}


function show(req, res) {

    // get apartment id from request params
    const id = req.params.id

    // db query for single apartment
    const apartment_sql = `SELECT * FROM appartamenti WHERE id = ? `

    // db query for owner
    const owner_sql = `
    select proprietari.*
    from proprietari
    join appartamenti
    on appartamenti.id_proprietario = proprietari.id
    where appartamenti.id = ? `

    // db query for services
    const services_sql = `
    select servizi.label
    from servizi
    join servizi_appartamento
    on servizi.id = servizi_appartamento.id_servizio
    where servizi_appartamento.id_appartamento = ? `

    // db query for reviews
    const reviews_sql = `
    select *
    from recensioni
    where id_appartamento = ? `




    // execute the apartment_sql query
    connection.query(apartment_sql, Number([id]), (err, results) => {
        // handle errors
        if (err) return res.status(500).json({ err: err })
        if (!results[0]) return res.status(404).json({ err: '404! Apartment not found' })
        // save result
        const apartment = results[0]
        console.log(apartment);

        // execute query for owner
        connection.query(owner_sql, Number([id]), (err, owner_results) => {
            // handle errors
            if (err) return res.status(500).json({ err: err })
            console.log(owner_results)
            // save results as a property of apartment
            apartment.owner = owner_results
        })

        // execute query for services
        connection.query(services_sql, Number([id]), (err, services_results) => {
            // handle errors
            if (err) return res.status(500).json({ err: err })
            console.log(services_results)
            // save results as a property of apartment
            apartment.services = services_results
        })

        // execute query for reviews
        connection.query(reviews_sql, Number([id]), (err, reviews_results) => {
            // handle errors
            if (err) return res.status(500).json({ err: err })
            console.log(reviews_results)
            // save results as a property of apartment
            apartment.reviews = reviews_results
        })

        // create the response
        const responseData = {
            data: apartment
        }

        console.log(responseData);

        // return the response
        res.status(200).json(responseData)
    })
}



module.exports = {
    index,
    show
}