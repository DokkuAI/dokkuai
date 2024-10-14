"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useAuth } from "@clerk/nextjs";

import axios from "axios";

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
    <DropdownMenuItem className="text-red-500" onClick={handleDelete}>
      Delete
    </DropdownMenuItem>
  );
};

export default DeleteRecord;
