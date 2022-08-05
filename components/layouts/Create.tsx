import Link from "next/link";
import { NavLink, NavLinks } from "../../utils/static";

export default (props: any) => {
  return (
    <main className={"flex h-screen w-full"}>
      <div className="flex h-full w-80 flex-col justify-between bg-black p-8 ">
        <div className="flex w-full flex-col">
          <div className="flex w-full select-none flex-col items-center justify-center text-green">
            <Link href={"/"}>
              <h1 className=" w-full cursor-pointer font-secondary text-5xl font-semibold">
                Meme
              </h1>
            </Link>
            <div className="flex w-full flex-col items-start">
              <h2 className="flex items-center text-3xl">creator</h2>
              <div className="flex items-center text-white">
                <p className="mr-1 text-xs">powered by</p>
                <img src={"/icons/imgflip_white_96.png"} width={"50px"} />
              </div>
            </div>
          </div>
        </div>
        <div className="-ml-8 -mb-4">
          <div className=" flex justify-center text-white">
            {NavLinks.map((content: NavLink, idx: number) => (
              <Link href={content.href} key={idx}>
                <p className="cursor-pointer after:content-['.'] first-of-type:mr-4">
                  {content.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-grow flex-col bg-black p-2">
        <div className="flex w-full flex-grow overflow-y-auto rounded-lg bg-black p-1">
          {props.children}
        </div>
      </div>
    </main>
  );
};
