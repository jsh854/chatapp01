const express = require("express");
const Router = express.Router();


Router.get("/",(req,res)=>{
    res.send("connected to the backend")
})

module.exports = Router;