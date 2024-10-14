import Link from "next/link";

const   ProjectTitle = ({ title, id }: { title: string; id: string }) => {
  return (
    <Link
      href={{
        pathname: "/project",
        query: { id: id },
      }}
    >
      <div>{title}</div>
    </Link>
  );
};

export default ProjectTitle;
