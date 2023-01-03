import { type NextPage } from "next";
import Head from "next/head";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Loveless</title>
        <meta name="loveless" content="Couple challenges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        Loveless
      </main>
    </>
  );
};

export default Home;
