const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
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

app.post("/", (req, res, next) => {
	fs.appendFile("read.txt", `${req.body.message}`, (err) => {
		err ? console.log(err) : res.redirect("/");
	});
});

app.get("/login", (req, res) => {
	res.send(`<form onsubmit="localStorage.setItem("username", document.getElementById('name').value)" action="/login" 
        method="POST"><h1>REGISTER</h1>
            <input placeholder="Enter Your Name" type="text" name="name" id="name" />
            <input type="submit" value="Login" />
        </form>`);
});

app.post("/login", (req, res) => {
	fs.appendFile("read.txt", `${req.body.name}:`, (err) => {
		err ? console.log(err) : res.redirect("/");
	});
});

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});
