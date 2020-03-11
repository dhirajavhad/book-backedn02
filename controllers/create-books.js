const Book= require('.../models/Book');



const controller = async(req,res) =>{
    const{body} = req;
    const book = await Book.create({
        name : body.name,
        disc : body.disc,
        author: body.author,
        releaseYear :body.releaseYear,


    })
    res.send(book);

};


module.exports= controller;

