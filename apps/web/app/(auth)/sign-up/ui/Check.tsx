"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Check = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="flex flex-col my-4 items-center">
      <div className="flex items-center">
        <input
          className={clsx(
            "h-5 w-5 transition-all rounded shadow hover:shadow-md checked:bg-slate-800 checked:border-slate-800 cursor-default",
            {
              "ring-black ring-2 ": path.includes("/usage"),
            }
          )}
          type="checkbox"
          name="team"
          checked={!path.includes("usage")}
        />
        <BlackLine
          value={path.includes("/details") || path.includes("/workspace")}
        />
        <input
          className={clsx(
            "h-5 w-5 transition-all rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800 cursor-default",
            {
              "ring-black ring-2 ": path.includes("/details"),
            }
          )}
          type="checkbox"
          name="team"
          checked={!(path.includes("usage") || path.includes("details"))}
        />
        <BlackLine value={path.includes("/workspace")} />
        <input
          className={clsx(
            "h-5 w-5 transition-all rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800 cursor-default",
            {
              "ring-black ring-2 ": path.includes("/workspace "),
            }
          )}
          type="checkbox"
          name="team"
          checked={false}
        />
      </div>

      <div className="flex gap-[80px] items-center ml-6 pt-2">
        <div>Usage</div>
        <div className="ml-4">Details</div>
        <div>Workspace</div>
      </div>
    </div>
  );
};

export default Check;

function BlackLine({ value }: { value: boolean }) {
  return (
    <div
      className={clsx("border-[1px] w-[120px] h-0", {
        "border-black": value,
        "border-[#9095A0]": !value,
      })}
    ></div>
  );
}
