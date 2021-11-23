import { PrismaClient } from "@prisma/client";
import type { NextApiHandler } from "next";

const prisma = new PrismaClient();

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const posts = prisma.post.findMany();
    res.status(200).json({ status: "success", data: posts });
  } else if (req.method === "POST") {
  } else {
    res.status(405).json({ status: "failure", message: "Method not allowed" });
  }
};

export default handler;
