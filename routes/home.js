const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
	fs.readFile("read.txt", (err, data) => {
		if (err) {
			console.log(err);
			data = "No chat exist";
		}
		res.send(`${data}<form action="/" onsubmit="document.getElementById('username') = localStorage.getItem('username')"
        method="POST">
            <input id="message" name="message" type="text">
            <input type="hidden" name="username" id="username" placeholder="username">
            <button type="submit">Send</button>
        </form>`);
	});
});

router.post("/", (req, res, next) => {
	fs.appendFile("read.txt", `${req.body.message}`, (err) => {
		err ? console.log(err) : res.redirect("/");
	});
});

module.exports = router;
