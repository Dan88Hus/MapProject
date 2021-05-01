const mongoose = require("mongoose")
const uri = "mongodb+srv://huseyinozdogan:agmLab06@cluster0.4jupq.mongodb.net/agmLab06?retryWrites=true&w=majority"

const connectDB = async () => {
  //to protect database URI we could use .env file
  try {
    await mongoose.connect(uri,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
}

module.exports = connectDB;