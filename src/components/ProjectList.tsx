import React, { FunctionComponent, useContext } from "react";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { Project } from "../models/Project.model";
import EditIcon from "@material-ui/icons/Edit";
import ViewIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router-dom";
import { ProjectsContext } from "../context";
import DeleteIcon from "@material-ui/icons/Delete";

const ProjectList: FunctionComponent<{}> = (props) => {
  const history = useHistory();
  const { removeProject, getProjects } = useContext(ProjectsContext);

  function viewDetails(project: Project) {
    history.push(`/project/${project.name}`);
  }

  function editProject(project: Project) {
    history.push(`/project/${project.name}/edit`);
  }

  return (
    <Table
      style={{
        marginTop: "1em",
      }}
      stickyHeader
      aria-label="sticky table"
    >
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Total Hours</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {getProjects().map((project: Project) => (
          <TableRow hover role="checkbox" tabIndex={-1} key={project.name}>
            <TableCell key="name">{project.name}</TableCell>
            <TableCell key="description">{project.description}</TableCell>
            <TableCell key="totalHours">
              {project.calculateTotalHours()}
            </TableCell>
            <TableCell key="actions">
              <ViewIcon onClick={() => viewDetails(project)} />
              <EditIcon onClick={() => editProject(project)} />
              <DeleteIcon onClick={() => removeProject(project.id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProjectList;
