const BaseController = require('./base.controller');

const AuthService = require('../services/auth.service');

class AuthController extends BaseController {
  constructor() {
    super();
    this.service = AuthService;
  }

  login() {
    return this.asyncWrapper(async (req, res, next) => {
      const { email, password } = req.body;

      const data = await this.service.login(email, password);

      this.send(res, data, 200);
    });
  }

  create() {
    return this.asyncWrapper(async (req, res, next) => {
      const { email, password } = req.body;

      const data = await this.service.create(email, password);

      this.send(res, data, 200);
    });
  }
}

module.exports = new AuthController();
