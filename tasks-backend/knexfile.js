// Update with your config settings.

module.exports = {
    client: 'mssql',
    connection: {
      server: '127.0.0.1',
      database: 'tasks',
      user:     'sa',
      password: 'qualidade'
    },
    // client: 'postgresql',
    // connection: {
    //   database: 'tasks',
    //   user:     'postgres',
    //   password: '12345'
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
