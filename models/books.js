const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const blogSchema = new Schema({
    title: [{type='string', require=true}],
    author: [{type='string' , require=true}],
    disc: ['string'],
    releaseYear:{type='date'},
  });


  const blog = mongoose.model('blog',blogSchema);
  module.exports= blog