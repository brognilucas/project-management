import React, { useState, FunctionComponent } from "react";

import { Project } from "../models/Project.model";
import { Time } from "../models/Time.model";

type Context = {
  createProject: Function;
  getProjectByName: Function;
  addTimeProject: Function;
  getProjects: Function;
};

const defaultContextValue: Context = {} as Context;

const ProjectsContext = React.createContext(defaultContextValue);

type ProviderProps = {
  initialProjects?: Project[];
};

const ProjectsProvider: FunctionComponent<ProviderProps> = (props) => {
  const [projects, setProjects] = useState(props.initialProjects || []);

  function getProjectByName(name: string): Project {
    return projects.find((project) => project.name === name) as Project;
  }

  function getIndexProjectByName(name: string): number {
    return projects.findIndex((project) => project.name === name);
  }

  function getProjects(): Project[] {
    return projects;
  }

  function createProject(project: Project): void {
    setProjects([...projects, project]);
  }

  function updateProject(project: Project) {
    let projects = [...getProjects()];
    const index = getIndexProjectByName(project.name);
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
      value={{ createProject, getProjectByName, addTimeProject, getProjects }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsProvider };
