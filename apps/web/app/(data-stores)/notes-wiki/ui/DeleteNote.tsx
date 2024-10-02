"use client";
import { useAuth } from "@clerk/nextjs";

import axios from "axios";

const DeleteNote = ({ id, setDlt }: any) => {
    const { getToken } = useAuth();

  async function handleDelete() {
    await axios.delete(`http://localhost:8080/v1/notes/${id}`);
 const token = getToken();
 await axios.post(
   "http://localhost:8080/v1/activity",
   {
     type: "deleted",
     name: "devesh",
     title: "Deleted Note",
     workspaceId: "",
   },
   { headers: { Authorization: `Bearer ${token}` } }
 );
    setDlt((value:any)=>{return !value});
  }
  return (
    <div className="text-red-500" onClick={handleDelete}>
      Delete
    </div>
  );
};

export default DeleteNote;
