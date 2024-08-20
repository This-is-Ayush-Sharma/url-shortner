const mongoose = require('mongoose');

const urls = mongoose.Schema({
    url: {
        type: String,
        require: true
    },
    shortnedUrl:{
        type: String,
        require: true
    },
    hashedUrl: {
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('urls', urls);