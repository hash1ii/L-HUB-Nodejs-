const mongoose = require('mongoose');

const viewtopicSchema = mongoose.Schema({

    subjectId:{type: String, required: true},
    title:{type: String, required: true},
    content:{type: String, required: true},
    image:{type: String, required: true},
    
});
  
const viewtopic = mongoose.model('viewtopic', viewtopicSchema);



module.exports = viewtopic;