const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'hbs' )

app.use(express.static("aset"))

//panggil halaman home
app.get('/', (req, res) => {
  res.render("indext")
})
//panggil halaman blog
app.get('/blog', (req, res) => {
  res.render("blog")
})
//panggil halaman testimanials
app.get('/testi', (req, res) => {
  res.render("testimonial")
})
//panggil halaman contact
app.get('/contact', (req, res) => {
  res.render("contact")
})

app.get('/about/:id', (req, res) => {
  const id= req.params.id
  res.send(`Hello! ini halaman tentang ${id}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// rqus quert

// app.get('/blog', (req, res) => {
//   const title = req.query.title;
//   const  author = req.query.author;
//   const  year = req.query.year;
//   res.send(`Hello! ini halaman ${title} author ${author}, tahun ${year}`)
// })
