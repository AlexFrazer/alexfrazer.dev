import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "tailwindcss/tailwind.css";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
