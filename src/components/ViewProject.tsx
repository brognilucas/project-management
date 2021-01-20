import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Project } from "../models/Project.model";
import ProjectForm from "./ProjectForm";
import { Button } from "@material-ui/core";
import { ProjectsContext } from "../context";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
const CreateProject: FunctionComponent<{}> = () => {
  const { name }: any = useParams();
  const { getProjectByName } = useContext(ProjectsContext);

  useEffect(() => {
    const project = getProjectByName(name);

    if (project) {
      formik.setValues(project);
    }
  }, []);

  const formik = useFormik({
    initialValues: new Project("", ""),
    onSubmit: () => {},
  });

  return (
    <>
      <ProjectForm disabled={true} formik={formik} />
    </>
  );
};

export default CreateProject;
