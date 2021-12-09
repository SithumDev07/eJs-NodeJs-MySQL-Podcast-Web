const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {

	res.render('index')
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`))
