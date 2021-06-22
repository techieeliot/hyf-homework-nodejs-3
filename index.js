const express = require('express');
const morgan = require('morgan');
const port = 3000

const app = express();
app.use(morgan('common'));
app.use(morgan('tiny'));

const users = ['Michael', 'Gob', 'Lucille', 'George']

// const users = [{
// 	// id: 1,
// 	name: 'Micheal Bluth'
// },
// {
// 	// id: 2,
// 	name: 'Gob Bluth'
// },
// {
// 	// id: 3,
// 	name: 'Lucille Bluth'
// },
// {
// 	// id: 4,
// 	name: 'Lindsay Bluth Fünke'
// },
// {
// 	// id: 5,
// 	name: 'Tobia Fünke'
// },
// {
// 	// id: 6,
// 	name: 'George Bluth'
// }]

app.get('/', (req, res) => {
	console.log("-----")
	console.log("successfully fetched the landing page.")
	res.send('Hello World!')
})

app.get('/users', (req, res) => {
	console.log("-----")
	console.log("successfully fetched a user list!");
	console.log(users)
	res.send(users);
})

app.listen(port, err => {
	if (err) console.log(err);
	console.log(`Example app listening at http://localhost:${port}`)
})
