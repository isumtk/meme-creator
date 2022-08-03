import Head from "next/head";
import { ReactElement } from "react";
import Create from "../../components/layouts/Create";

const CreateMeme = () => {
  return (
    <div>
      <Head>
        <title>Create - Meme Creator</title>
        <meta
          name="description"
          content="Create and share memes with your friends and family"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Create MEme</p>
    </div>
  );
};

CreateMeme.getLayout = function getLayout(page: ReactElement) {
  return <Create>{page}</Create>;
};

export default CreateMeme;
