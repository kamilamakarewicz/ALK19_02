const express = require("express");
const path = require("path");
const functions = require("./functions")

const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.use("/assets", express.static(path.join(__dirname,"./assets")));
app.use("/js", express.static(path.join(__dirname,"./js")));
app.get("/", function (req,res){
    res.render('index', {
        pageTitle: "Lekcja ALK 19.02",
        y: functions.add(2, 6)
    })
})

app.get("/about", function (req,res){
    res.render('about')
})

app.listen(port, () => {
    console.log(`Server działa na porcie ${port}`)
});