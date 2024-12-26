const express = require('express')
const path = require('node:path')

const app = express()
const PORT = process.env.PORT ?? 3000

const books = require('./data/books.json')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, (err) => {
    err ? console.log(`Server failed with error ${err}`) : `Server up at http://localhost:${PORT}`;
})

app.get('/libros', (req, res) => {
    res.render('books', {
        title: 'Libros prominentes del siglo XX',
        books
    });
})