module.exports =
{
  "development": {
    "username": "culmen" ,
    "password": "Popi1234" ,
    "database": "culmen_shops" ,
    "host": "mysql-culmen.alwaysdata.net" ,
    "dialect": "mysql"
  /*   "port" : process.env.DB_PORT */
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
