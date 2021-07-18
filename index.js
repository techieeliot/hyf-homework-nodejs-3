const { json } = require('express');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000

const app = express();
app.use(morgan('common'));
app.use(json())

const users = [{user: 'Michael'}, {user:'Gob'},{ user: 'Lucille'}, {user: 'George'}]

app.get('/', (req, res) => {
	console.log("-----")
	console.log("successfully fetched the landing page.")
	res.send('Hello World!')
})

app.get('/users', (req, res) => {
	console.log("-----")
	console.log("successfully fetched a user list!");
	console.log(users)
	res.send([]);
})

app.post('/users', (req, res) => {
	console.log('loading body...');
	console.log('body:',req.body)
	res.send(req.body)
})

app.get('/users/:id', (req, res) => {
	console.log('loading id...');
	console.log('params:', req.params);
	res.send(req.params);
})

app.listen(port, err => {
	if (err) console.log(err);
	console.log(`Example app listening at http://localhost:${port}`)
})
