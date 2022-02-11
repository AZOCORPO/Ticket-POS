var mongoose = require('mongoose')

var dataSchema = mongoose.Schema({
    data: String,
})

var articleModel = mongoose.model('datas', dataSchema)

module.exports = articleModel