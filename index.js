const express = require('express')
const app = express()
const port = 3000

const users = [{
	id: 1,
	name: 'Micheal Bluth'
},
{
	id: 2,
	name: 'Gob Bluth'
},
{
	id: 3,
	name: 'Lucille Bluth'
},
{
	id: 4,
	name: 'Lindsay Bluth Fünke'
},
{
	id: 5,
	name: 'Tobia Fünke'
},
{
	id: 6,
	name: 'George Bluth'
}]

app.use('/', function(req, res, next){
	res.json({title: "GeeksforGeeks"})
	next();
    })

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/users', (req, res) => {
	console.log("GET Users List")
	res.json(users)
})

app.listen(port, err => {
	if (err) console.log(err);
	console.log(`Example app listening at http://localhost:${port}`)
})
