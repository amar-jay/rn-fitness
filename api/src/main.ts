import express from "express";
import { prisma } from "./repositories";
import routes from "./routes";

async function main() {
  const app = express();
  app.use(express.json());
  //  app.use(cors()) // TODO: Add CORS later
  app.use(routes);

  console.log("Hello from main.ts");
  // ... you will write your Prisma Client queries here

  app.listen("3000", () => {
    console.log("Server is running on port 3000");
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
