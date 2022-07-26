const { User } = require('../models');

class UserService {
  constructor() {
    this.model = User;
  }

  async findByEmail(email) {
    const user = await this.model.findOne({ where: { email }, raw: true });

    return user;
  }

  async create(data) {
    const user = await this.model.create(data);

    return user;
  }
}

module.exports = new UserService();
