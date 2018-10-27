var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const helper = require('../helpers/babu')

var userSchema = new Schema({
    name:  String,
    email: String,
    password:   String,
    role: String,
    
});
userSchema.pre('validate', function() {  ///sebelum di validasi
    this.password = helper.encode(this.password)
});

const User = mongoose.model(`User`, userSchema)
module.exports = User