import Head from "next/head";
import Link from "next/link";
import Template from "../components/molecules/Template";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = (props: any) => {
  const { templates } = props;
  return (
    <main className="h-full w-full snap-y scroll-smooth bg-gray-300">
      <Head>
        <title>Home - Meme Creator</title>
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
      <div className="relative h-full w-full bg-inherit">
        <nav className="sticky top-0 z-50 flex h-16  w-full items-center bg-neutral-900 px-20">
          <h1 className=" text-4xl font-bold text-green-600">Meme Creator</h1>
        </nav>
        <div className="flex h-full w-full flex-wrap justify-center overflow-y-auto px-8">
          {templates.map((meme: any) => (
            <Template key={meme.id} {...meme} />
          ))}
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const memes = await res.json();
  const templates = memes.data.memes;

  return {
    props: {
      templates,
    },
  };
}

export default Home;
