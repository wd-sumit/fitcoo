const APIError = require('../utils/AppError');
const JWT = require('../utils/jwt');
const UserService = require('./user.service');

class AuthService {
  async login(email, password) {
    const user = await UserService.findByEmail(email)

    if (!user) throw new APIError('Invalid email or password', 404)

    if(user.password !== password) throw new APIError('Invalid email or password', 404)

    const result = {
      token: JWT.signToken({id: user.id, email: user.email})
    }

    return result
  }
}

module.exports = new AuthService()
