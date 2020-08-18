const { Router } = require('express');
const router = Router();

// Routes
router.get('/', (req, res) => {
	res.json({"Title" : "Hello World"});
});

router.get('/test', (req, res) => {
	const data = {
		'name' : 'test'	}
	res.json(data);
});

module.exports = router;