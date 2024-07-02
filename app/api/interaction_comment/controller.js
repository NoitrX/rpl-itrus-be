const { StatusCodes } = require("http-status-codes");
const { getAllComment, postComment } = require("../../services/interaction_comment");

const getAll = async (req, res, next) => {
  try {
    const result = await getAllComment(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const postComments = async (req, res, next) => {
  try {
    const result = await postComment(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  postComments,
};
