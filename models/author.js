const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const authorSchema = new Schema({
    name: [{type='string', require=true}],
    email: [{type='string' , require=true}],
  });


  const blog1 = mongoose.model('blog1',authorSchema);
  module.exports= blog1