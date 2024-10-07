"use client";
import ActivityIcon from "@/public/Activity.svg";
import { Log } from "./Log";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function ActivityLog() {
  const { getToken } = useAuth();
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    async function getActivityLogs() {
      const token = await getToken();
      const res = await axios.get(
        "http://localhost:8080/v1/activity/66f58c0ea460109c68bcec3c",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setLogs(res.data);
    }
    getActivityLogs();
  },[]);
  return (
    <div className="flex-grow w-full overflow-y-auto">
      {logs.map((log: any, index: number) => {
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
