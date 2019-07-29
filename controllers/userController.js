const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res, next) => {
	try {
		if(!req.session.loggedIn){
			res.json({
				data: "not logged in"
			});
		}

		const foundUsers = await User.find({})
		res.json({
			data: foundUsers
		})

	} catch (err){
		next(err)
	}
})

router.get('/profile', async (req, res, next) => {
	try {
		if (!req.session.loggedIn) {
			res.json({
				data: "not logged in"
			})
		} else {
			const foundUser = await User.findById(req.session.userDbId);
			res.status(200).json(foundUser);
		}
	} catch (err){
		next(err)
	}
})

module.exports = router;