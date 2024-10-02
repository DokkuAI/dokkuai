"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import EditIcon from "@/public/Edit.svg";
import Image from "next/image";
import axios from "axios";

const CreateNote = () => {
  const router = useRouter();
  const {getToken} = useAuth();
  async function handleClick() {
    const content = JSON.stringify({
      type: "doc",
      content: [],
    });
    const res = await axios.post("http://localhost:8080/v1/notes", {content: content, name: "devesh", createdBy: "ME"});
    const token = getToken();
    await axios.post("http://localhost:8080/v1/activity", {
      type: "created-note",
      name: "devesh",
      title: "Crerated Note",
      workspaceId: "",
    }, {headers: {Authorization: `Bearer ${token}`}});
    router.push(`/notes-wiki/${res.data._id}`);
  }

  return (
    <div>
      <div
        onClick={handleClick}
        className="cursor-pointer h-9 flex items-center gap-2 px-2 rounded bg-[#F3F4F6] border-2 border-[#F3F4F6] hover:border-black"
      >
        <Image src={EditIcon} alt="icon" />
        Create New
      </div>
    </div>
  );
};

export default CreateNote;
