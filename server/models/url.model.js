const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    qrId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QrCode'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;