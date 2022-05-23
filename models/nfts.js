const mongoose = require('mongoose');
const { stringify } = require('uuid');

const addNftSchema = mongoose.Schema({
    name: string,
    floorPrice: Number,
    volume: Number,
    volume24hrs: Number,
    volume7days: Number,
    UniqueOwners: Number,
    Supply: Number 
});


module.exports = mongoose.model('Post', postSchema)