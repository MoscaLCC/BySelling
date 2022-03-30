var mongoose = require("mongoose")

var Schema = mongoose.Schema

var SchemaUser= new Schema({
    nif:{type: String , required: true},
    email:{type: String , required: true},
    password:{type: String , required: true},
    pnome:{type: String , required: true},
    unome:{type: String , required: true},
    ename:{type: String , required: true},
    phone:{type: String , required: true},
    country:{type: String , required: true},
    distrito:{type: String},
    concelho:{type: String},
    codpost:{type: String , required: true},
    freguesia:{type: String},
    morada:{type: String , required: true},
    info:{type: String}
})

module.exports = mongoose.model('users',SchemaUser)