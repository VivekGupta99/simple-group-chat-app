const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

const loginRoutes = require("./routes/login");
const homeRoutes = require("./routes/home");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRoutes);
app.use(homeRoutes);

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});
