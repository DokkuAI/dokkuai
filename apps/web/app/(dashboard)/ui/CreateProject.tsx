"use client";

import MyButton from "@/components/(data-stores)/ui/Button";
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
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
const CreateProject = () => {
  const { getToken } = useAuth();
  const [title, setTitle] = useState("");
  async function handleSubmit() {
    const token = await getToken();
    await axios.post(
      "http://localhost:8080/v1/project",
      { title: title },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }
  return (
    <div className="flex justify-end items-center">
      <Dialog>
        <DialogTrigger>
          <MyButton title="Create New" svg={EditIcon} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Project Details.</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="font-semibold">
                Name
              </Label>
              <Input
                placeholder="Project Name..."
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
            <Button onClick={handleSubmit}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProject;
