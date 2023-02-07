const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/view/home.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/view/about.html");
});

app.get("/work", (req, res) => {
    res.sendFile(__dirname + "/view/works.html");
});

app.get("/photogallery", (req, res) => {
    res.sendFile(__dirname + "/view/photogallery.html");
});

app.listen(3000, () => {
    console.log("excuchando puerto 3000");
});