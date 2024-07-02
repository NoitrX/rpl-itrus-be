const { BadRequestError, UnauthorizedError } = require("../errors");
const prisma = require("../db");

const getAllPost = async (req) => {
  const result = await prisma.post.findMany({
    include: {
      media: true,
      createdByUser: {
        select: {
          id: true,
          username: true,
        },
      },
      updatedByUser: {
        select: {
          id: true,
          username: true,
        },
      },
      comment_post: true,
      _count: {
        select: {
          liked_post: {
            where: {
              liked: true,
            },
          },
        },
      },
    },
  });
  return result;
};
const getDetailPost = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.post.findUnique({
    where: {
      id: id,
    },
    include: {
      media: true,
      createdByUser: {
        select: {
          id: true,
          username: true,
        },
      },
      updatedByUser: {
        select: {
          id: true,
          username: true,
        },
      },
      comment_post: true,
      liked_post: true,
    },
  });

  return result;
};
const createPost = async (req) => {
  const { content, media } = req.body;
  if (!content) {
    throw new BadRequestError("Konten Wajib Diisi");
  }
  const result = await prisma.post.create({
    data: {
      content,
      createdBy: req.user.id,
      media: {
        create: media.map((m) => ({
          url: m.url,
          type: m.type,
        })),
      },
    },
    include: {
      media: true,
    },
  });
  if (!result) {
    throw new BadRequestError("Gagal Membuat Post");
  }
  return result;
};

const updatePost = async (req) => {
  const { content, media } = req.body;
  const id = parseInt(req.params.id);

  if (!id) {
    throw new BadRequestError("ID Post Tidak Ditemukan");
  }

  if (!content) {
    throw new BadRequestError("Konten Wajib Diisi!!");
  }
  const result = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      content: content,
      media: {
        upsert: media.map((m) => ({
          where: { id: m.id || 0 },
          update: {
            url: m.url,
            type: m.type,
          },
          create: {
            url: m.url,
            type: m.type,
          },
        })),
      },
    },
    include: {
      media: true,
    },
  });
  if (!result) {
    throw new BadRequestError("Gagal Mengupdate Post");
  }
  return result;
};

const deletePost = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.post.delete({
    where: {
      id: id,
    },
  });
  if (!result) {
    throw new BadRequestError("Gagal Menghapus Post");
  }
  return result;
};
module.exports = { getAllPost, getDetailPost, createPost, updatePost, deletePost };
