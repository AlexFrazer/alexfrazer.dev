import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import "tailwindcss/tailwind.css";
import Layout from "@/components/Layout";
import { client } from "@/query-client";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
