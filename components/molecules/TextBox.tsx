import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { useState } from "react";
type MemeText = {
  text: string;
  xpos: any;
  ypos: any;
  color: string;
  bgColor: string;
  fontSize: number;
  fontWeight: number;
};

export default (props: any) => {
  const { object, idx, textBoxes, setTextBoxes } = props;
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const handleMemeText = (e: any, idx: number) => {
    let memeData: MemeText[] = [...textBoxes];
    memeData[idx].text = e.target.value;
    setTextBoxes(memeData);
  };

  const handleFontWeight = (idx: number) => {
    console.log("Changing Font Weigt");
    let memeData: MemeText[] = [...textBoxes];
    if (memeData[idx].fontWeight === 500) {
      memeData[idx].fontWeight = 800;
    } else {
      memeData[idx].fontWeight = 500;
    }
    setTextBoxes(memeData);
  };

  const handleFontSize = (e: any, idx: number) => {
    let memeData: MemeText[] = [...textBoxes];
    var regex = /^[0-9]*$/;
    if (
      e.target.value.match(regex) &&
      e.target.value <= 120 &&
      e.target.value >= 0
    ) {
      memeData[idx].fontSize = e.target.value;
      setTextBoxes(memeData);
    }
  };

  const handleFontColor = (e: any, idx: number) => {
    let memeData: MemeText[] = [...textBoxes];
    memeData[idx].color = e.target.value;
    console.log(e.target.value);
    setTextBoxes(memeData);
  };

  return (
    <div key={idx} className={"my-2 mb-4 flex w-full flex-col"}>
      <div className="flex h-8 w-full items-center">
        <input
          value={object.text}
          placeholder={"Enter meme text"}
          onChange={(e: any) => handleMemeText(e, idx)}
          className={"mr-1 h-8 w-full rounded px-1"}
        />
        <button
          onClick={() => setMenuActive(!menuActive)}
          className={
            menuActive
              ? "flex h-8 w-8 rotate-180 items-center justify-center rounded bg-white"
              : "flex h-8 w-8 items-center justify-center rounded bg-white"
          }
        >
          <ChevronDownIcon width={24} height={24} />
        </button>
      </div>
      <Transition show={menuActive}>
        <div className="mt-1 flex w-full">
          <input
            value={object.fontSize}
            className={"flex h-8 w-10 items-center rounded px-1"}
            onChange={(e: any) => handleFontSize(e, idx)}
          />
          <input
            value={object.color}
            type={"color"}
            className={"mx-1 flex h-8 flex-1 items-center rounded p-1"}
            onChange={(e: any) => handleFontColor(e, idx)}
          />
          <button
            onClick={() => handleFontWeight(idx)}
            className={
              object.fontWeight === 800
                ? "flex h-8 w-8 items-center justify-center rounded bg-green-600 text-lg font-bold"
                : "flex h-8 w-8 items-center justify-center rounded bg-white text-lg font-bold"
            }
          >
            B
          </button>
        </div>
      </Transition>
    </div>
  );
};
