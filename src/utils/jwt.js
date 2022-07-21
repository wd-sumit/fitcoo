const jwt = require('jsonwebtoken');
const { promisify } = require('util');

class JWT {
  static signToken(data) {
    return jwt.sign(data, 'secret', {
      expiresIn: '90d',
    });
  }

  static async verifyToken(token) {
    return await promisify(jwt.verify)(token, 'secret');
  }
}

module.exports = JWT;
