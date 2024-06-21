const createTokenUser = (user) => {
  return {
    username: user.username,
    nim: user.nim,
    email: user.email,
    password: user.password,
    level: user.level,
    id: user.id,
    status: user.status,
  };
};

module.exports = {
  createTokenUser,
};
