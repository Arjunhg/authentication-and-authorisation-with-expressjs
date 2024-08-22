const { DataTypes, Model } = require("sequelize");
const { sequelize }  = require("../service/database/db");

class UserModel extends Model { }
UserModel.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        contact_number:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        account_type:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user'
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt:{
            type: DataTypes.DATA,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: 'users'
    }
)
module.exports = UserModel