import PostList from "@/components/PostList";
import { Post, PrismaClient } from "@prisma/client";
import type { GetStaticProps, NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

type Props = { posts: readonly Post[] };

const Blog: NextPage<Props> = ({ posts }) => {
  const { t } = useTranslation("blog");
  return (
    <div className="container px-8">
      <Head>
        <title>{t("title")}</title>
      </Head>
      <div className="container flex flex-col gap-4">
        <h1 className="py-4 text-lg dark:text-white">{t("title")}</h1>
      </div>
      <PostList initialPosts={posts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();
  return { props: { posts } };
};

export default Blog;
