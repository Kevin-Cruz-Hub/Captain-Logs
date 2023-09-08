const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_URI)

    const db = mongoose.connection;

    db.on('error',(e)=> console.log(e))
    db.on('open',(e)=> console.log('Connected to MongoDB'))
    db.on('close',(e)=> console.log('MongoDB session has ended'))
}
module.exports = connectDB;