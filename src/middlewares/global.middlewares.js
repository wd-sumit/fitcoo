class GlobalMiddlewares {
  static handle(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';
    const message = err.message || 'Oops! Something went wrong.';

    if (process.env.NODE_ENV === 'production') {
      return res.status(statusCode).json({
        status,
        message,
        path: req.originalUrl,
        method: req.method,
      });
    }

    res.status(statusCode).json({
      status,
      message,
      path: req.originalUrl,
      method: req.method,
      error: err,
      stack: err.stack,
    });
  }
}

module.exports = GlobalMiddlewares;
