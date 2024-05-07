const express = require('express')
const app = express()
const port = 4131

app.set("views", "templates");
app.set("view engine", "pug");
app.use(express.static('resources'));
app.use('/images', express.static('resources/images'));
app.use('/js', express.static("resources/js"));

app.get('/', (req , res) => {
    res.render("mainpage.pug");
})

app.listen (port , () => {
    console.log(`Example app listening on port ${port}`)
  })