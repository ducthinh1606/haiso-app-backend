const { User } = require('../entities')
const BaseRepository = require("./BaseRepository");

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async findByEmail(email) {
    try {
      return await User.findOne({where: {email: email}});
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new UserRepository();
