const mongoose = require('mongoose');

const viewcontentSchema = mongoose.Schema({
    title:{type: String, required: true},
    content:{type: String, required: true},
    image:{type: String, required: true},
    
});
  
const viewcontent = mongoose.model('viewcontent', viewcontentSchema);



module.exports = viewcontent;