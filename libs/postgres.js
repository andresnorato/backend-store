const { Client } = require('pg');

async function getConnecion() {


  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'andres',
    password: 'admin123',
    database: 'my_store'
  });
  await client.connect();
  return client;
}

module.exports = getConnecion;
