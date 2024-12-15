function errorHandler(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    return res
      .status(401)
      .json({
        message:
          "Tài khoản quá thời hạn đăng nhập vui lòng đăng nhập lại để tiếp tục...!!!",
      });
  }

  if (err.name === "validationError") {
    return res.status(401).json({ message: err });
  }
  return res.status(500).json(err);
}

module.exports = errorHandler;
