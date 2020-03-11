const express = require('express')
const app = express();

const routes = require('routes')




mongoose.connect('mongodb://localhost:27017/books-app',{
    useNewUrlParser : true,
    useunifiedTopology:true

});

app.use(routes);