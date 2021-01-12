import React, { FunctionComponent, useContext, useEffect } from "react";
import { ProjectsContext } from "../context/";
import { Project } from "../models/Project.model";
import { Time } from "../models/Time.model";

const Home: FunctionComponent = ({}) => {
  const { getProjects, createProject, addTimeProject } = useContext(
    ProjectsContext
  );

  useEffect(() => {
    createProject(new Project("test", "test"));
  }, []);

  function updateHour() {
    addTimeProject(
      {
        hour: 30,
        description: "lol",
      } as Time,
      "test"
    );
  }

  return (
    <div>
      {getProjects().map((item: Project) => (
        <div key={item.name} onClick={updateHour}>
          {" "}
          {item.name} - {item.calculateTotalHours()}{" "}
        </div>
      ))}
    </div>
  );
};

export default Home;
