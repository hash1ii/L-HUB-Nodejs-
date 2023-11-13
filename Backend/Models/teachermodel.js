const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const teacherSchema = mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    contact:{type: String, required: true},
    subject:{type: String, required: true},
    age:{type: String, required: true},
    qualification:{type: String, required: true},
    experience:[],
    password:{type: String, required: true},
    image:{type: String, required: true},
    
});
teacherSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
      // Only hash the password if it's not already hashed
      if (!this.password.startsWith('$2b$')) {
        try {
          const hashedPassword = await bcrypt.hash(this.password, 10);
          this.password = hashedPassword;
          next();
        } catch (error) {
          return next(error);
        }
      } else {
        return next();
      }
    } else {
      return next();
    }
  });
  
const teacher = mongoose.model('teacher', teacherSchema);



module.exports = teacher;