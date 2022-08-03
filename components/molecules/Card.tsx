import Link from "next/link";
export default (props: any) => {
  return (
    <div className="m-2 h-[500px] w-[372px] rounded-md bg-white p-2">
      <div className="flex h-full w-full flex-col rounded-md bg-white">
        <div className="h-[90%] w-full">
          <div className="flex h-[10%] w-full items-center justify-center font-medium text-black">
            {props.name}
          </div>
          <img
            src={props.url}
            className={
              "h-[90%] w-full rounded-lg object-cover transition-all duration-150 hover:scale-95 hover:object-contain"
            }
          />
        </div>
        <div className="flex h-[10%] w-full items-center justify-center pt-1">
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
            }}>
            <button className="h-full w-full rounded bg-grass font-semibold text-white hover:bg-green">
              Use template
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
