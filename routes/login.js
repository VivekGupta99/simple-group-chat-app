const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/login", (req, res) => {
	res.send(`<form onsubmit="localStorage.setItem("username", document.getElementById('name').value)" action="/login" 
        method="POST"><h1>REGISTER</h1>
            <input placeholder="Enter Your Name" type="text" name="name" id="name" />
            <input type="submit" value="Login" />
        </form>`);
});

router.post("/login", (req, res) => {
	fs.appendFile("read.txt", `${req.body.name}:`, (err) => {
		err ? console.log(err) : res.redirect("/");
	});
});

module.exports = router;
