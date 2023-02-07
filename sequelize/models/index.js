const { Sequelize } = require("sequelize");
const Members = require("./members")
const MemberClub = require("./member_club")

require("dotenv").config()

const db_name = process.env.DBName;
const user = process.env.DBUser;
const password = process.env.DBPassword;
const host = process.env.DBHost;

//Initialize new sequelize object with configuration of the server
const seq = new Sequelize(db_name, user, password, {
    host: host,
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

//Authenticate the user with provided credentials
seq.authenticate().then(() => {
    console.log("Connected");
}).catch(err => {
    console.log(`Got error with message: ${err}`);
})

const db = {};
db.Sequelize = Sequelize
db.seq = seq
db.members = Members(seq)
db.memberClub = MemberClub(seq)

//Sync all the changes to the server
// db.seq.sync({ force: true });