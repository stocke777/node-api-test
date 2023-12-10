const express = require("express");
const bodyParser = require('body-parser')
const axios = require('axios');
const db = require('./sqliteDB');


const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// json-server --watch db.json --port 4000 

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


app.get("/data", async (req, res) => {
    try {
        const response = await axios.get('http://localhost:4000/users');
        console.log(response.data);
        res.send(response.data);
      } catch (error) {
        console.error('Error:', error.message);
        console.error('Response:', error.response.data);
      }
	
	// res.send(data);

});


app.get("/sqlite", async (req, res) => {
    try {
        const users = await db('users').select();
        const posts = await db('posts').select();
        res.json({...users, ...posts});
      } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }

});


app.listen(port, () => console.log("server working"));
