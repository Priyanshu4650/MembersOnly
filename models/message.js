const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoURL = "mongodb+srv://admin:test1234@nodelearning.lvzfb5p.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURL);
const db = mongoose.connection;
db.on('err', console.error.bind(console, "mongoose connection error"));

const Message = mongoose.model(
    "Messages",
    new Schema({
        author: { type: String, required: true },
        title: { type: String, required: true },
        text: { type: String, required: true },
        like: { type: Number },
    }, { timestamps: true })
);

module.exports = Message;