import Link from "next/link";

export default (props: any) => {
  return (
    <div className="m-10 h-[34rem] w-[24rem] snap-start rounded-md bg-white p-3  shadow-lg">
      <div className="h-full w-full">
        <p className="mb-1 h-[4rem] text-lg font-semibold line-clamp-2">
          {props.name}
        </p>
        <section className="mb-2 h-[25rem] w-full">
          <img
            src={props.url}
            className={
              "h-full w-full bg-center object-cover transition-all duration-[300ms] hover:scale-95 hover:object-contain"
            }
          />
        </section>
        <Link
          href={{
            pathname: `/create/${props.id}`,
            query: {
              name: props.name,
              url: props.url,
              width: props.width,
              height: props.height,
              box_count: props.box_count,
            },
          }}
        >
          <button className="h-[3rem] w-full rounded-md bg-blue-600 text-center text-xl font-semibold text-white hover:bg-blue-700">
            Use template
          </button>
        </Link>
      </div>
    </div>
  );
};
