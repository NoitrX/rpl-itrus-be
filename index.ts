import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
  const hashPw = await bcrypt.hash("password", 10);
  const user = await prisma.user.create({
    data: {
      username: "admin",
      nim: "2307411013",
      email: "admin@gmail.com",
      password: hashPw,
      level: "ADMIN",
      status: "active",
    },
  });
  console.log(user);
  console.log("DATABASE_URL:", process.env.DATABASE_URL);
}

main()
  .catch(async (e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
