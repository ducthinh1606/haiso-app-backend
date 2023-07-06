class BaseController {
  constructor() {
    this.sendSuccessResponse = this.sendSuccessResponse.bind(this);
    this.sendErrorResponse = this.sendErrorResponse.bind(this);
  }

  sendSuccessResponse(res, message, data = {}, code = 200) {
    const response = {
      data: data,
      message: message,
    };

    return res.status(code).json(response);
  }

  sendErrorResponse(res, message, data = {}, code = 500) {
    const response = {
      error: data,
      message: message,
    };

    return res.status(code).json(response);
  }
}

module.exports = BaseController;
