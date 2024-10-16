"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useAuth } from "@clerk/nextjs";
import axios from "axios"; 
import React from "react";


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
  return (
    <DropdownMenuItem onClick={handleClick} className="cursor-pointer">
      <div className="w-full">{pinned ? "Unpin" : "Pin"}</div>
      
    </DropdownMenuItem>
  );
};

export default FilePin;
