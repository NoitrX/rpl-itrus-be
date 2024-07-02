const { StatusCodes } = require("http-status-codes");
const { postLike } = require("../../services/interaction_like");

const likePost = async (req, res, next) => {
  try {
    const result = await postLike(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  likePost,
};
