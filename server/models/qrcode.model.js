const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
    properties: {
        type: String,
        required: true
    },
    urlId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Url',
        required: true
    },
    qrCode: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const QrCode = mongoose.model('QrCode', qrCodeSchema);

module.exports = QrCode;