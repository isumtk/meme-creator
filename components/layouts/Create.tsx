import Link from "next/link";
import { useEffect, useState } from "react";

type textBoxProperties = {
  text: string;
  color: string;
  bgColor?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: number;
};

export default (props: any) => {
  const [textBoxes, setTextBoxes] = useState<Array<textBoxProperties>>([]);
  const addTextBox = (box_count: number) => {
    let textElem = {
      text: "Enter Meme Text",
      color: "#000",
      bgColor: "inherit",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: 500,
      fontSize: 28,
    };
    for (let i = 0; i < box_count; i++) {
      setTextBoxes([...textBoxes, textElem]);
    }
  };

  const manageText = (e: any, idx: number) => {
    let textBoxData = [...textBoxes];
    textBoxData[idx].text = e.target.value;
    setTextBoxes(textBoxData);
  };

  const manageTextColor = (e: any, idx: number) => {
    let textBoxData = [...textBoxes];
    textBoxData[idx].color = e;
    setTextBoxes(textBoxData);
  };

  useEffect(() => {
    console.log(JSON.stringify(textBoxes));
  }, [textBoxes]);

  return (
    <main className={"flex h-screen w-full"}>
      <div className={"flex h-full w-full"}>
        <div
          className={
            "flex h-full w-[350px] flex-col justify-between bg-black p-8"
          }
        >
          <div className="w-full">
            <div className={"w-full"}>
              <Link href={"/"}>
                <h1 className={"text-5xl font-bold text-green-500"}>Meme</h1>
              </Link>
              <h2 className={"text-3xl font-semibold text-green-500"}>
                Creator
              </h2>
            </div>
          </div>
          <div className="w-full">
            <div className="flex w-full justify-center text-white">
              <Link href={"/about"}>
                <p className="mr-5 cursor-pointer text-center font-semibold">
                  about
                </p>
              </Link>
              <Link href={"/about"}>
                <p className="cursor-pointer text-center font-semibold">
                  contact
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className={"flex h-full w-full bg-neutral-900 py-4 px-2"}>
          {props.children}
        </div>
        <div className={"h-full w-[450px] bg-neutral-900"}>
          <div
            className={
              "flex h-full w-full flex-col justify-between rounded-md bg-black px-4 py-4"
            }
          >
            <button
              onClick={() => addTextBox(1)}
              className="h-12 w-full rounded-lg bg-blue-500 text-lg font-semibold text-white transition-all hover:bg-blue-600"
            >
              Add Text
            </button>
            <div className="flex h-full w-full flex-col">
              {textBoxes.map((content: textBoxProperties, idx: number) => (
                <div key={idx} className="flex w-full bg-amber-500">
                  <input
                    value={content.text}
                    onChange={(e: any) => manageText(e, idx)}
                  />
                </div>
              ))}
            </div>
            <button className="h-12 w-full rounded-lg bg-green-500 text-lg font-semibold text-white transition-all hover:bg-green-600">
              Save
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
