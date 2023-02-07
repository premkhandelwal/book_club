const express = require("express");
const app = express();

const port = 8081;
require("./models")


app.get("/", function(req, res){
    res.send("Home Page")
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})


