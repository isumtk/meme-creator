import Link from "next/link";

export default (props: any) => {
  return (
    <main className={"flex h-screen w-full"}>
      <div className={"flex h-full w-full"}>
        <div className={"flex h-full w-full bg-neutral-900 py-4 px-2"}>
          {props.children}
        </div>
      </div>
    </main>
  );
};
