"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectRow from "./ProjectRow";
import { useAuth } from "@clerk/nextjs";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [dlt, setDlt] = useState(false);
  const { getToken } = useAuth();

  // useEffect(() => {
  //   getLibraryFiles();
  //   async function getLibraryFiles() {
  //     const token = await getToken();

  //     const { data } = await axios.get(
  //       "http://localhost:8080/v1/project",
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     setProjects(data.slice(0, 8));
  //   }
  // }, [dlt]);
  return (
    <>
      {projects.map((project: any) => {
        return (
          <ProjectRow
            id={project._id}
            favourite={project.favourite}
            title={project.title}
            dateCreated={project.createdAt.slice(0, 10)}
            tags={project.tag ?? "-"}
            createdBy={project.createdBy || "-"}
            setDlt={setDlt}
          />
        );
      })}
    </>
  );
};

export default Projects;
