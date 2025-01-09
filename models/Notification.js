// models/Notification.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    notify_new_releases: { type: Boolean, default: true },
    notify_recommendations: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
