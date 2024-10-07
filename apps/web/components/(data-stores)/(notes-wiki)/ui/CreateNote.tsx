"use client";
import MyButton from "@/components/(data-stores)/ui/Button";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import EditIcon from "@/public/Edit.svg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";

const CreateNote = () => {
  const router = useRouter();
  const { getToken } = useAuth();
  const [title, setTitle] = useState("");

  async function handleClick() {
    const token = await getToken();
    const content = JSON.stringify({
      type: "doc",
      content: [],
    });
    const res = await axios.post(
      "http://localhost:8080/v1/notes",
      {
        content: content,
        name: title,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    await axios.post(
      "http://localhost:8080/v1/activity",
      {
        type: "created-note",
        title: `Crerated Note ${title}`,
        workspaceId: "",
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    router.push(`/notes-wiki/${res.data._id}`);
  }

  return (
    <div onClick={handleClick}>
      <Dialog>
        <DialogTrigger>
          <MyButton title="Create New" svg={EditIcon} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Note Details.</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="font-semibold">
                Name
              </Label>
              <Input
                placeholder="Note Name..."
                id="name"
                value={title}
                className="col-span-3"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleClick}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateNote;
