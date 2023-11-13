const mongoose = require('mongoose');
const connectDB = async() => {
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017/lhub", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    }
    catch(error) {
        console.error("error in connecting");
        process.exit(1)
    }
}







module.exports = connectDB;