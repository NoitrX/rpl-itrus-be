const { StatusCodes } = require("http-status-codes");
const { getAllPost, getDetailPost, createPost, updatePost, deletePost } = require("../../services/post");

const getAll = async (req, res, next) => {
  try {
    const result = await getAllPost(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getDetail = async (req, res, next) => {
  try {
    const result = await getDetailPost(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const createP = async (req, res, next) => {
  try {
    const result = await createPost(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateP = async (req, res, next) => {
  try {
    const result = await updatePost(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteP = async (req, res, next) => {
  try {
    const result = await deletePost(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { getAll, getDetail, createP, updateP, deleteP };
