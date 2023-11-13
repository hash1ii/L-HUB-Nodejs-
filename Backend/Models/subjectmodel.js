const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    subject:{type: String, required: true},
    description:{type: String, required: true},
    image:{type: String, required: true},
    
});
  
const subject = mongoose.model('subject', subjectSchema);



module.exports = subject;