
const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    store_id: Number,
    lat: Number,
    lng: Number,
    name: String,
    type: String,
    calification: Number,
});

module.exports =  mongoose.model('Store', storeSchema);