import ActivityIcon from "@/public/Activity.svg";
import { Log } from "./Log";
import axios from "axios";

export default async function ActivityLog() {
  const res = await axios.get(
    "http://localhost:8080/v1/activity/66f58c0ea460109c68bcec3c"
  );
  const logs = res.data;
  console.log(logs)
  return (
    <div className="flex-grow w-full overflow-y-auto">
      {logs.map((log:any, index:number) => {
        
        return (
          <>
            <Log
              name={log.name}
              date={log.createdAt.slice(0, 10)}
              title={log.title}
              avatar="/Avatar.png"
              svg={ActivityIcon}
            />
            {index != logs.length - 1 ? <BlueLine /> : null}
          </>
        );
      })}
    </div>
  );
}

function BlueLine() {
  return <div className="mx-6 h-10 border-l-2 border-[#5E8AF7]"></div>;
}
