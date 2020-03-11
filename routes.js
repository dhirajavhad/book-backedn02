const express = require('express')
const routes = express.Router();

const getBooks = require('./controllers/get-books');
const createBooks = require('./controllers/create-books');
const createAuthor= require('./controllers/create-author');


router.get('/',(req,res)=> {res.send('Hello World')})

router.get('/books',getBooks);
router.post('/book',createBook);

router.post('/author',createAuthor);


module.exports = router;












module.exports= routes;

