const { getAll, createNewPost } = require("../../services/post");
const { StatusCodes } = require("http-status-codes");

const getAllPost = async (req, res, next) => {
  try {
    const result = await getAll(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const createPost = async (req, res, next) => {
  try {
    const result = await createNewPost(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllPost,
  createPost,
};
