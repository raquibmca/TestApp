const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello!!")
});

<<<<<<< HEAD
app.put("/", (req, res) => {
    res.send("Hello!!")
=======
app.put("/",(request, response)=>{
	response.status(200).json({name:"Raquib"});
	
>>>>>>> d8238b02ff4b21cec2d25128685a731f60caa44a
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`app is listing the port 5000`)
});
