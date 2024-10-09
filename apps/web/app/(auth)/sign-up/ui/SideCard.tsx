import clsx from "clsx";
;
type cardInputs = {
  svg: React.ReactNode;
  path: string;
  route: string;
  title: string;
  description: string;
};


export function SideCard({ svg, path, route, route2, route3, title, description }: any) {
  return (
    <div
      className={clsx("flex gap-[17px]", {
        "text-[#171A1F]": path === route,
        "text-black": path === route2,
        "text-[#000000]": path === route3,
        "text-[#9095A0]": path !== route,
      })}
    >
      {svg}
      <div className="flex flex-col leading-[26px] text-[16px]">
        <div className="font-bold">{title}</div>
        <div className="font-normal">{description}</div>
      </div>
    </div>
  );
}
