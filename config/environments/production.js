
module.exports = {
    PORT : process.env.PORT,
    DB : {
        username: 'root',
        password : '',
        database : 'siscolasmunives_prod',
        host : 'localhost',
        dialect: 'mariadb',
        logging:false
    }
};