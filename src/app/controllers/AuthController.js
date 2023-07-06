const BaseController = require('./BaseController');
const { registerValidation } = require('../validators/authValidator')
const AuthService = require('../services/AuthService');

class AuthController extends BaseController {
  constructor() {
    super();
  }

  async register(req, res) {
    try {
      await registerValidation.validateAsync(req.body, { abortEarly: false })

      const { name, email, password, tel, address } = req.body;

      const newUser = await AuthService.register({ name, email, password, tel, address });

      return this.sendSuccessResponse(res, "Register successful", { newUser }, 201)
    } catch (error) {
      if (error.isJoi) {
        const validationErrors = error.details.map((detail) => detail.message);

        return this.sendErrorResponse(res, "Validation failed", { validation: validationErrors }, 422)
      } else {
        return this.sendErrorResponse(res, "Unexpected error", error.message, 500)
      }
    }
  }
}

module.exports = AuthController;