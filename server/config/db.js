const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://dkrmentor:Qwerty.123@cluster0.7qflvbf.mongodb.net/?retryWrites=true&w=majority`,{useNewUrlParser:true, useUnifiedTopology:true})

const connectiuon = mongoose.connection

module.exports= connectiuon