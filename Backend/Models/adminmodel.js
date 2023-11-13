const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = mongoose.Schema({
    name:{type: String, required: true},
    description:{type: String},
    email:{type: String, required: true, unique: true},
    contact:{type: String, required: true},
    role:{type: String, required: true},
    password:{type: String, required: true},
    image:{type: String, required: true},
    
});
adminSchema.pre('save', async function (next) {
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
  
const admin = mongoose.model('admin', adminSchema);



module.exports = admin;