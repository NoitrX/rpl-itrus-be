const { login, register } = require("../../services/auth");
const { StatusCodes } = require("http-status-codes");

const loginUser = async (req, res, next) => {
  try {
    const result = await login(req);
    res.status(StatusCodes.OK).json({
      data: { token: result.token, level: result.level },
    });
  } catch (err) {
    next(err);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const result = await register(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  loginUser,
  registerUser,
};
