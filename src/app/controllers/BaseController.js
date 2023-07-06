class BaseController {
  sendSuccessResponse = (reply, message = "Success", data = {}, code = 200) => {
    reply.code(code).send({ message, data });
  }

  sendErrorResponse = (reply, message = "Unexpected error", data = {}, code = 500) => {
    reply.code(code).send({ message, error: data });
  }
}

module.exports = BaseController;
