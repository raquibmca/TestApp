const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello!!")
});

app.put("/", (req, res) => {
    res.send("Hello!!")
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`app is listing the port 5000`)
});
