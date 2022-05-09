require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, "views")))
app.use(express.json())

app.get('/', (req, res, next) => {
	res.render('index')
})

app.listen(port, () => {
	console.log(`Server up on http://localhost:${port}`);
})