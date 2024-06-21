const prisma = require("../db");
const { BadRequestError, UnauthorizedError } = require("../errors");
const bcrypt = require("bcrypt");
const { createTokenUser, createJWT } = require("../utils");

const register = async (req) => {
  const { username, nim, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  if (!username || !nim || !email || !password) {
    throw new BadRequestError("Semua Inputan Wajib diisi!");
  }

  const user = await prisma.user.create({
    data: {
      username,
      email,
      nim,
      password: hashedPassword,
    },
  });
  if (!user) {
    throw new BadRequestError("Registrasi Gagal!!");
  }
  return user;
};

const login = async (req) => {
  const { nim, password } = req.body;
  if (!nim || !password) {
    throw new BadRequestError("Email dan Password Wajib diisi!");
  }

  const user = await prisma.user.findUnique({
    where: {
      nim,
    },
  });

  if (!user) {
    throw new UnauthorizedError("Nim atau Password Salah!");
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new UnauthorizedError("Password atau NIM salah!!");
  }

  const token = createJWT({ payload: createTokenUser(user) });
  return { token, level: user.level };
};

module.exports = { register, login };
