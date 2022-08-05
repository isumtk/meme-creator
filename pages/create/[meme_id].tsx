import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import Create from "../../components/layouts/Create";

type MemeText = {
  text: string;
  xpos: any;
  ypos: any;
  color: string;
  bgColor: string;
  fontSize: number;
  fontWeight: number;
};

const CreateMeme = (props: any) => {
  const { meme } = props;
  const [memeTexts, setMemeTexts] = useState<Array<MemeText>>([]);
  console.log(JSON.stringify(meme));
  return (
    <div className="flex w-full bg-inherit">
      <Head>
        <title>Create - Meme Creator</title>
        <meta
          name="description"
          content="Create and share memes with your friends and family"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full w-full items-center justify-center bg-gray ">
        <svg width={"100%"} height={"100%"}>
          <image href={meme.url} x="0" y="0" height={"100%"} width={"100%"} />
          {
            <text x="50%" y="50%" onMouseDown={(event) => {}}>
              Hello
            </text>
          }
        </svg>
      </div>
      <div className="h-full w-[540px] bg-grey"></div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      meme: { ...context.query },
    },
  };
}

CreateMeme.getLayout = function getLayout(page: ReactElement) {
  return <Create>{page}</Create>;
};

export default CreateMeme;
