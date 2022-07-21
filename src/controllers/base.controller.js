class BaseController {
  asyncWrapper(fn) {
    return (req, res, next) => fn(req, res, next).catch(next);
  }

  send(res, data, statusCode, message) {
    res.status(statusCode).json({
      isSuccess: true,
      message,
      data,
    });
  }
}

module.exports = BaseController;
