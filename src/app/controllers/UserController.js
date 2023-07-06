const BaseController = require('./BaseController');
const { registerValidation } = require('../validators/authValidator')
const UserService = require('../services/UserService');

class UserController extends BaseController {
  constructor() {
    super();
  }
}

module.exports = UserController;