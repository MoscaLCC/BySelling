var mongoose = require("mongoose")

var Schema = mongoose.Schema

var SchemaOrder= new Schema({
    composicaonome:{type: String , required: true},
    composicaocomp:{type: String , required: true},
    ponto:{type: String , required: true},
    peso:{type: String , required: true},
    linicial:{type: String , required: true},
    lfinal:{type: String , required: true},
    quant:{type: String , required: true},
    quantunit:{type: String , required: true},
    caderno:{type: String},
    preparacao:{type: [String]},
    tinturar:{type: [String], required: true},
    embalagem:{type: [String]},
    enrolar:{type: [String] , required: true},
    moradaeprazos:{type: [String]}
})

module.exports = mongoose.model('orders',SchemaOrder)