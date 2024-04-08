const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
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
    date: {
        type: String,
        default: Date.now
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

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;