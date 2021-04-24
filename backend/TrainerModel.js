const { Pool } = require('pg')
const config = require('../../config')
const PF_URI = config.URI;

const pool = new Pool({ connectionString : PG_URI,});

module.exports = pool;
