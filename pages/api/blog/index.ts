import type { NextApiHandler } from "next";
import client from "@/prisma-client";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const posts = client.post.findMany();
    res.status(200).json({ status: "success", data: posts });
  } else if (req.method === "POST") {
  } else {
    res.status(405).json({ status: "failure", message: "Method not allowed" });
  }
};

export default handler;
