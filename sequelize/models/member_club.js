const { DataTypes } = require("sequelize");

module.exports = (seq) => {
    seq.define(
        //Name of the table
        "member_club", 
        {
            //Attributes of the table
            personid: DataTypes.INTEGER,
            company_id: DataTypes.INTEGER,
            createdAt: DataTypes.DATE
        },
        {
            //Consists of extra options 
            updatedAt: false,
            createdAt: false
        }
    )
}