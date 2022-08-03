import Head from "next/head";
import { ReactElement } from "react";
import Main from "../components/layouts/Main";
import Card from "../components/molecules/Card";

const Home = (props: any) => {
  return (
    <div className={"flex h-full w-full flex-wrap justify-center"}>
      <Head>
        <title>Home - Meme Creator</title>
        <meta
          name="description"
          content="Create and share memes with your friends and family"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.meme.map((content: any) => (
        <Card {...content} key={content.id} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const memes = await res.json();
  const meme = memes.data.memes;

  return {
    props: {
      meme,
    },
  };
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Main>{page}</Main>;
};

export default Home;
