const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	wine: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Wine'
	}]
});

module.exports = mongoose.model('User', UserSchema);

