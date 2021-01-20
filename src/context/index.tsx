import React, { useState, FunctionComponent } from "react";

import { Project } from "../models/Project.model";
import { Time } from "../models/Time.model";

type Context = {
  createProject: Function;
  getProjectByName: Function;
  addTimeProject: Function;
  getProjects: Function;
  updateProject: Function;
  removeProject: Function;
};

const defaultContextValue: Context = {} as Context;

const ProjectsContext = React.createContext(defaultContextValue);

type ProviderProps = {
  initialProjects?: Project[];
};

const ProjectsProvider: FunctionComponent<ProviderProps> = (props) => {
  const [projects, setProjects] = useState([] as Project[]);

  function getProjectByName(name: string): Project {
    return projects.find((project) => project.name === name) as Project;
  }

  function getIndexById(id: string): number {
    return projects.findIndex((project) => project.id === id);
  }

  function getProjects(): Project[] {
    return projects;
  }

  function createProject(project: Project): void {
    project.generateId();
    setProjects([...projects, project]);
  }

  function removeProject(id: string) {
    const remainingProjects = getProjects().filter(
      (project) => project.id !== id
    );

    setProjects(remainingProjects);
  }

  function updateProject(project: Project) {
    let projects = [...getProjects()];
    const index = getIndexById(project.id);
    projects[index] = project;
    setProjects(projects);
  }

  function addTimeProject(time: Time, projectName: string): void {
    let project = getProjectByName(projectName);
    project.addProjectHour(time);

    updateProject(project);
  }

  return (
    <ProjectsContext.Provider
      value={{
        createProject,
        getProjectByName,
        addTimeProject,
        getProjects,
        updateProject,
        removeProject,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsProvider };
