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
    "username": process.env.DB_USER ,
    "password": process.env.DB_PASSWORD ,
    "database": process.env.DB_NAME ,
    "host": process.env.DB_HOST ,
    "port": process.env.DB_PORT,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER ,
    "password": process.env.DB_PASSWORD ,
    "database": process.env.DB_NAME ,
    "host": process.env.DB_HOST ,
    "port": process.env.DB_PORT,
    "dialect": "mysql"
  }
};
