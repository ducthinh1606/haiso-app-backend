const BaseController = require('./BaseController');
const { registerValidation } = require('../validators/authValidator')
const AuthService = require('../services/AuthService');
const UserDTO = require('../models/dto/user.dto');

class AuthController extends BaseController {
  constructor() {
    super();
  }

  register = async (request, reply) => {
    try {
      await registerValidation.validateAsync(request.body, { abortEarly: false })

      const { name, email, password, tel, address } = request.body;

      const newUser = await AuthService.register({ name, email, password, tel, address });

      return this.sendSuccessResponse(reply, "Register successful", UserDTO(newUser), 201)
    } catch (error) {
      if (error.isJoi) {
        const validationErrors = error.details.map((detail) => detail.message);

        return this.sendErrorResponse(reply, "Validation failed", { validation: validationErrors }, 422)
      } else {
        return this.sendErrorResponse(reply, "Unexpected error", error.message, 500)
      }
    }
  }
}

module.exports = AuthController;