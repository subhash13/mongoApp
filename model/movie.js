const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    synopsis:{
        type: String,
    }
})

module.exports =  mongoose.model('Movie',movieSchema)