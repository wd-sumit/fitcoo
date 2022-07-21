const BaseController = require('./base.controller');

const AuthService = require('../services/auth.service');

class AuthController extends BaseController {
  constructor() {
    super();
    this.service = AuthService;
  }

  login() {
    return this.asyncWrapper(async (req, res, next) => {});
  }
}

module.exports = new AuthController();
