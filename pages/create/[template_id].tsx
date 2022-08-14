import Head from "next/head";
import { useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { PlusCircleIcon, ChevronDownIcon } from "@heroicons/react/outline";
import TextBox from "../../components/molecules/TextBox";

type MemeText = {
  text: string;
  xpos: any;
  ypos: any;
  color: string;
  bgColor: string;
  fontSize: number;
  fontWeight: number;
};

const EditMeme: NextPageWithLayout = (props: any) => {
  const { template } = props;
  const [memeTitle, setMemeTitle] = useState<string>(template.name);
  const [textBoxes, setTextBoxes] = useState<Array<MemeText>>([]);

  const moveText = (e: any, idx: number) => {
    let memeData: MemeText[] = [...textBoxes];
    memeData[idx].xpos = e.screenX;
    memeData[idx].ypos = e.screenY;
    setTextBoxes(memeData);
  };

  const addTextBox = () => {
    let newText: MemeText = {
      text: "Meme Text",
      xpos: "50%",
      ypos: "50%",
      color: "black",
      bgColor: "inherit",
      fontSize: 18,
      fontWeight: 500,
    };
    setTextBoxes([...textBoxes, newText]);
  };

  const handleMemeTitle = (e: any) => {
    setMemeTitle(e.target.value);
  };

  useEffect(() => {
    console.log(JSON.stringify(textBoxes));
  }, [textBoxes]);

  return (
    <main className={"flex h-screen w-full flex-col"}>
      <Head>
        <title>Edit - Meme Creator</title>
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
      <nav className="sticky top-0 z-50 flex h-16 w-full items-center bg-neutral-900 px-10">
        <h1 className=" text-4xl font-bold text-green-600">Meme Creator</h1>
      </nav>
      <div className={"flex h-full w-full"}>
        <div className="flex h-full w-1/5 min-w-[300px] flex-col bg-neutral-700">
          <p>{template.name}</p>
          <p>{template.box_count}</p>
        </div>
        <div className={"flex h-full w-full flex-col bg-green-500"}>
          <svg width={"100%"} height={"100%"}>
            <image
              href={template.url}
              width={"100%"}
              height={"100%"}
              x={"0"}
              y={"0"}
            />
            {textBoxes.map((text: any, idx: number) => (
              <text
                x={text.xpos}
                y={text.xpos}
                fontSize={text.fontSize}
                fontWeight={text.fontWeight}
                fill={text.color}
                //onMouseMove={(e) => moveText(e, idx)}
              >
                {text.text}
              </text>
            ))}
          </svg>
        </div>
        <div
          className={
            "flex h-full w-1/5 min-w-[300px] flex-col bg-neutral-700 px-3 py-2"
          }
        >
          <input
            placeholder="Enter Title"
            className="rounded bg-neutral-100 p-2 text-lg outline-none"
            value={memeTitle}
            onChange={(e: any) => handleMemeTitle(e)}
          />
          <div className="my-4 h-full w-full bg-inherit p-2 px-0">
            <div className="flex h-6 w-full items-center justify-between bg-inherit">
              <p className="text-lg font-semibold text-slate-100">Options</p>
              <PlusCircleIcon
                width={30}
                height={30}
                onClick={addTextBox}
                className={
                  "text-slate-100 transition-all hover:animate-spin hover:text-green-500"
                }
              />
            </div>
            <div className="mt-1 max-h-full min-h-0 w-full overflow-y-auto bg-inherit">
              {textBoxes.length > 0 ? (
                textBoxes.map((object: MemeText, idx: number) => (
                  <TextBox
                    object={object}
                    key={idx}
                    idx={idx}
                    setTextBoxes={setTextBoxes}
                    textBoxes={textBoxes}
                  />
                ))
              ) : (
                <p className=" mx-auto my-6 w-1/2 text-center">
                  Press the plus icon to add meme text
                </p>
              )}
            </div>
          </div>
          <button className="w-full rounded bg-indigo-600 p-2 text-lg font-semibold text-slate-100 hover:bg-indigo-700">
            Save
          </button>
        </div>
      </div>
    </main>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      template: { ...context.query },
    },
  };
}

export default EditMeme;
