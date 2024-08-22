// innitialize database
const  { Sequelize }  = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './service/database/db.sqlite',
    logging: false,
})

sequelize.authenticate()
    .then(async () => {
    await sequelize.sync({alter:true}).authenticate(() => {
        console.log("Database synchronized");
    })
    console.log("Connection has been establised successfully");
    })
    .catch((err) => {
        console.log("Unnable to connect to the database: ", err);
    });

module.exports = {
    sequelize,
};
