const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// params
app.get("/user/:id", (req, res) => {
	const id = req.params.id;
	console.log(id);

	res.send(`USER of id: ${id}`);
});

// query
app.get("/user", (req, res) => {
	// hit ?id=123&name=John
	const id = req.query.id;
	const name = req.query.name;

	res.send(`you asked for ${id} and ${name}`);
});


// body parsing
app.get("/body", (req, res) => {
	const userId = req.body.id;
	const userName = req.body.name;
	res.json({ userId, userName });

});

app.listen(port, () => console.log("server working"));
