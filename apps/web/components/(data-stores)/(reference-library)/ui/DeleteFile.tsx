"use client";

import DeleteIcon from "@/public/Delete.svg";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useAuth } from "@clerk/nextjs";

import axios from "axios";
import Image from "next/image";

const DeleteRecord = ({ id }: {id: string}) => {
    const { getToken } = useAuth();

  async function handleDelete() {
    await axios.delete(`http://localhost:8080/v1/library/${id}`, {headers: {Authorization: `Bearer ${await getToken()}`}});

//     await axios.post(
//    "http://localhost:8080/v1/activity",
//    {
//      type: "deleted",
//      title: "Deleted Note",
//    },
//    { headers: { Authorization: `Bearer ${await getToken()}` } }
//  );
  }
  return (
    <DropdownMenuItem className="text-red-500 cursor-pointer" onClick={handleDelete}>
      <div className="flex items-center gap-2 w-full">
        <Image src={DeleteIcon} alt="chat icon" />
       Delete
      </div>
    </DropdownMenuItem>
  );
};

export default DeleteRecord;
