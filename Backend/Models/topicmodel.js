const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
    subject:{type: String, required: true},
    topic:{type: String, required: true},
    description:{type: String, required: true},
    image:{type: String, required: true},
    
});
  
const topic = mongoose.model('topic', topicSchema);



module.exports = topic;