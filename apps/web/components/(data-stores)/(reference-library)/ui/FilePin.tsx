"use client";
import { useAuth } from "@clerk/nextjs";
import axios from "axios"; 


const FilePin = ({ pinned, id }: { pinned: boolean; id: string }) => {
  const { getToken } = useAuth();

  async function handleClick() {
    const token = await getToken();
    await axios.patch(
      `http://localhost:8080/v1/library/${id}`,
      { pinned: !pinned },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }
  return <div onClick={handleClick}>{pinned ? "Unpin" : "Pin"}</div>;
};

export default FilePin;
