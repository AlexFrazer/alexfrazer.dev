import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

const Blog: NextPage = () => {
  const { t } = useTranslation("blog");
  return (
    <div>
      <Head>
        <title>{t("title")}</title>
      </Head>
    </div>
  );
};

export default Blog;
