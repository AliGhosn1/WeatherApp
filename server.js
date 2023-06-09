const https = require("https");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () =>{
    console.log("Server started on port 3000.")
});
