const express = require('express');
const router = express.Router();
const test = require('../../services/tests/test.service');

router.get('/test', test.getAll);
router.get('/test/:id', test.testGetOne);
router.post('/test', test.createOne);
router.put('/test/:id', test.update);
router.delete('/test/:id', test.delete);


module.exports = router;