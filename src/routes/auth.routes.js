const { Router } = require('express');
const AuthController = require('../controllers/auth.controller');

const router = Router();

router.post('/login', AuthController.login());
router.post('/create', AuthController.create())

module.exports = router;
