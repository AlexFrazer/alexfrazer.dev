import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

const Home: NextPage = () => {
  const { t } = useTranslation("home");
  return (
    <div>
      <Head>
        <title>{t("title")}</title>
      </Head>
    </div>
  );
};

Home.displayName = "Home";

export default Home;
