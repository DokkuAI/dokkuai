
enum WorkspaceType {
    PERSONAL= "personal",
    TEAM= "team"
}
enum WorkType {
    ENGINEER= "engineer",
    MANAGER= "manager",
    RESEARCHER= "researcher",
    OTHER= "other"
}
enum DesignationType {
    ENGINEER= "engineer",
    MANAGER= "manager",
    RESEARCHER= "researcher",
    EXECUTIVE= "executive",
    FREELANCER= "freelancer",
    OTHER= "other"
}


export interface IWorkspace {
    name: string,
    type: WorkspaceType,
    invites: string[]
}

enum Size {
  INDIVISUAL= "0-1",
  VERY_SMAll= "2-10",
  SMALL= "11-50",
  MEDIUM= "51-200",
  BIG= "201-500",
  VERY_BIG= "501-1000",
  LARGE= "1001-5000",
  ORGANISATION= "5000+",
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  about: {
    work: WorkType;
    designation: DesignationType;
    size: Size;
    description: string;
  };
}

enum FileType {
    PDF= "pdf",
    LINK= "link",
    OTHER= "other"
}

interface Ifile  {
  type: FileType;
  title: string;
  year: number;
  author: string;
  tags: string[];
  date: string;
};

export type files = Ifile[] ;

interface note {
  name: string;
  date: string;
  link?: string;
  page: number;
  tags: string[];
  created: string;
  url: string;
  size: string;
};

export type notes = note[] ;