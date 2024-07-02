const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");

// const getLikes = async (req) => {
//   const postId = parseInt(req.params.postId);
//   //   To get How Many Like In That Post
//   const likeCounts = await prisma.interaction_Like.groupBy({
//     by: ["postId"],
//     _count: {
//       liked: true,
//     },
//     where: {
//       liked: true,
//     },
//   });
//   const likeCountMap = {};
//   likeCounts.forEach((like) => {
//     likeCountMap[like.postId] = like._count.liked;
//   });
//   //   To Get List Of User Get the Liked
//   const likes = await prisma.interaction_Like.findMany({
//     where: {
//       postId: postId,
//       liked: true,
//     },
//     include: {
//       user_liked: true,
//     },
//   });

//   const getNameOfUser = likes.map((like) => ({
//     userId: like.user_liked.id,
//     username: like.user_liked.username,
//   }));

//   return { countLikes: likeCountMap, getLikes: getNameOfUser };
// };

const postLike = async (req) => {
  const postId = parseInt(req.params.postId);
  const userId = parseInt(req.user.id);

  const { liked } = req.body;

  const result = await prisma.interaction_Like.create({
    data: {
      postId: postId,
      user_id: userId,
      liked: liked,
    },
  });

  return result;
};

module.exports = {
  // getLikes,
  postLike,
};
