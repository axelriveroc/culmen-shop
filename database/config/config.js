module.exports =
{
  "development": {
    "username": "culmen" || process.env.DB_USER,
    "password": "Popi1234" || process.env.PASSWORD,
    "database": "culmen_shops" || process.env.DB_NAME,
    "host": mysql-culmen.alwaysdata.net ||  process.env.DB_HOST,
    "dialect": "mysql",
    "port" : process.env.DB_PORT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect":  "mysql"
  }
};
