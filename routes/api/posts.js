const express = require('express');
const router = express.Router();

//@route GET api/users/text
//@description Tst users routes
//@access Public

router.get('/test', (req, res) => res.json({ msg: 'posts Works'}));

module.exports = router;