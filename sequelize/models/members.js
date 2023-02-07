const { DataTypes } = require("sequelize");

module.exports = (seq) => {
    seq.define(
        //Name of the table
        "members", 
        {
            //Attributes of the table
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING, 
            email: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            imageURL: DataTypes.STRING,
            titlesRead: DataTypes.INTEGER
        },
        {
            //Consists of extra options 
            updatedAt: false,
            createdAt: false
        }
    )
}