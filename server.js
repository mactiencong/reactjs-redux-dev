var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static("./app/assets"));

app.get("/", (req, resp)=>{
    resp.render("home");
})

app.listen(3000, ()=>{
    console.log("Server running");
})