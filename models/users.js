const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  nickname: String,
  place: { type: mongoose.Schema.Types.ObjectId, ref: 'places' },
});

const User = mongoose.model('users', userSchema);

module.exports = User;