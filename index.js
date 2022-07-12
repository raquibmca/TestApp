const express = require("express");
const path = require("path");
const fs = require("fs");


const app = express();

app.get("/", (req, res) => {
    res.send("Hello!!")
});

app.put("/",(request, response)=>{
	response.status(200).json({name:"Raquib"});
	
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`app is listing the port 5000`)
})
