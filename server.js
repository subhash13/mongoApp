const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Movie = require('./model/movie')
mongoose.set('strictQuery', false);
app.use(express.urlencoded({ extended: false })) // json parsing
app.set('view engine', 'ejs')

const db = "mongodb://localhost:27017/movies"
mongoose.connect(db).then(()=>{
    console.log('connection established');
})

app.get('/', async(req, res) => {
    let movies = await Movie.find()
    res.render('index',{movies})
})

app.get('/new',(req,res)=>{
    res.render('new')
})

app.post('/',async(req,res)=>{
    let movieData = new Movie({
        title: req.body.title,
        rating: req.body.rating,
        synopsis: req.body.synopsis
    })
    try{
        await movieData.save()
        res.redirect('/')
    }catch(e){
        res.render('new')
    }
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})