const { Client } = require('pg')

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    }
})
client.connect(err => {
    if (err) {
        console.error("error connection to database",err.stack);
    } else {
        console.log('Connected to database')
    }
})

module.exports = client;