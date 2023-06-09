module.exports =
{
  "development": {
    "username": "root" ,
    "password":"fede",
    "database": "mydb" ,
    "host": "127.0.0.1" ,
    "dialect": "mysql"
    
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
