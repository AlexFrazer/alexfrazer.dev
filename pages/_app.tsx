import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "react-query";
import "tailwindcss/tailwind.css";
import Layout from "@/components/Layout";
import { client } from "@/query-client";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </QueryClientProvider>
  );
}
