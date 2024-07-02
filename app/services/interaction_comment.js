const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");

const getAllComment = async (req) => {
  const postId = parseInt(req.params.postId);
  const result = await prisma.interaction_Comment.findMany({
    where: {
      postId: postId,
    },
    include: {
      author_comment: true,
    },
  });
  return result;
};

const postComment = async (req) => {
  const postId = parseInt(req.params.postId);
  const userId = parseInt(req.user.id);
  const { comment } = req.body;
  const result = await prisma.interaction_Comment.create({
    data: {
      postId: postId,
      author_id: userId,
      comment: comment,
    },
  });
  return result;
};

module.exports = {
  getAllComment,
  postComment,
};
