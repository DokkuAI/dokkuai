"use client";
import { usePathname } from "next/navigation";

const Check = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="flex my-4 justify-center">
      <div className="flex flex-col gap-2 items-center">
        <input
          className="h-5 w-5 transition-all rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800 cursor-default"
          type="checkbox"
          name="team"
          checked={!path.includes("usage")}
        />
        Usage
      </div>
      <BlackLine />
      <div className="flex flex-col gap-2 items-center">
        <input
          className="h-5 w-5 transition-all rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800 cursor-default"
          type="checkbox"
          name="team"
          checked={!(path.includes("usage") || path.includes("details"))}
        />
        Details
      </div>
      <BlackLine />
      <div className="flex flex-col gap-2 items-center">
        <input
          className="h-5 w-5 transition-all rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800 cursor-default"
          type="checkbox"
          name="team"
          checked={false}
        />
        Workspace
      </div>
    </div>
  );
};

export default Check;

function BlackLine() {
  return <div className="border-[1px] w-[98px] h-0 border-black mt-[10px]"></div>;
}
