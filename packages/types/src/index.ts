import {string, z} from "zod";

export type WorkspaceType = {
  type: "solo" | "team";
};

export const UserData = z.object({
  work: z.enum(["engineer", "manager", "researcher", "other"], {
    message: "Work is required",
  }),
  role: z.enum(
    ["executive", "researcher", "manager", "engineer", "freelancer", "other"],
    {
      message: "Role is required",
    }
  ),
  size: z.enum([
    "0-1",
    "2-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1001-5000",
    "5000+",
  ]),
  description: string().max(80).optional(),
});

export type UserData = z.infer<typeof UserData>;

export const WorkspaceName = z.object({
  name: string().min(1),
});

export type WorkspaceName = z.infer<typeof WorkspaceName>;

export const Invites = z.array(z.string().email());

export type Invites = z.infer<typeof Invites>;

type file = {
  type: "pdf" | "link" | "other";
  title: string;
  year: number;
  author: string;
  tags: string[];
  date: string;
};

export type files = { files: file[] };

type note = {
  name: string;
  date: string;
  link?: string;
  page: number;
  tags: string[];
  created: string;
  url: string;
  size: string;
};

export type notes = { notes: note[] };
