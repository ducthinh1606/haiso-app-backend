const UserRepository = require("../models/repositories/UserRepository");
const { hash } = require("../utils/helpers")

class AuthService {
  async register(userData) {
    const existingUser = await UserRepository.findByEmail(userData.email);

    if (existingUser) {
      throw new Error('Email is already registered');
    }

    userData.password = await hash(userData.password);

    return UserRepository.create(userData);
  }
}

module.exports = new AuthService();