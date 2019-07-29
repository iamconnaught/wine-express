const mongoose = require('mongoose');

const WineSchema = new mongoose.Schema({
	vintage: Number,
	varietal: String,
	vineyard: String,
	yearPurchased: Number,
	region: String,
	drinkable: Number,
	opened: Boolean,
	sold: Boolean

});

module.exports = mongoose.model('Wine', WineSchema);