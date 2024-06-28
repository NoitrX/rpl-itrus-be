const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");

const getAll = async (req) => {
  const post = await prisma.post.findMany({
    select: {
      content: true,
      createdAt: true,
      updatedAt: true,
    },
    include: {
      createdByUser: {
        select: {
          username: true,
          id: true,
        },
      },
      updatedByUser: {
        select: {
          username: true,
          id: true,
        },
      },
      images: {
        select: {
          url_image: true,
        },
      },
      video: {
        select: {
          url_video: true,
        },
      },
    },
  });

  return post;
};

const createNewPost = async (req) => {
  const { content, url_image, url_video } = req.body;
  const result = await prisma.post.create({
    data: {
      content,
      createdBy: req.user.id,
      images: {
        create: [{ url_image }],
      },
      video: {
        create: [{ url_video }],
      },
    },
    include: {
      images: true,
      video: true,
    },
  });
  return result;
};
module.exports = { getAll, createNewPost };
