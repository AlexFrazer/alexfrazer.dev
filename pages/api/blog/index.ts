import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const posts = await prisma.users.findMany();
  console.log(posts);
  res.status(200).json({ status: "success" });
}
