const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
	res.render('index')
})

app.get('/features', (req, res) => {
	res.render('features', { title: "Features" })
})

app.get('/pricing', (req, res) => {
	res.render('features', { title: "Pricing" })
})

app.get('/resources', (req, res) => {
	res.render('features', { title: "Resources" })
})

app.get('/blog', (req, res) => {
	res.render('features', { title: "Blog" })
})
const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`))
