const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    _id:Schema.Types.ObjectId,
    title:String,
    body:String
});

module.exports = mongoose.model("Note",NoteSchema);
