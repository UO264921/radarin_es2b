const { Schema, model } = require('mongoose');

const FriendRequestSchema = new Schema ({
    webidSolicitante : String,
    webidSolicitado : String,
    status : String
});

module.exports = model('FriendRequest',FriendRequestSchema);

