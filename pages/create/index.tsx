import Head from "next/head";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const CreateMeme: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Create - Meme Creator</title>
        <meta
          name="description"
          content="Create and Share memes with your friends and family"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
    </div>
  );
};
