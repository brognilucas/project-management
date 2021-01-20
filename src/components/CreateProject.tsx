import React, { FunctionComponent, useContext } from "react";
import { Project } from "../models/Project.model";
import ProjectForm from "./ProjectForm";
import { Button } from "@material-ui/core";
import { ProjectsContext } from "../context";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
const CreateProject: FunctionComponent<{}> = () => {
  const history = useHistory();
  const { createProject } = useContext(ProjectsContext);

  function handleCreateProject(project: Project) {
    createProject(project);

    toast.success("Projeto was created", {
      autoClose: 2000,
      position: "bottom-right",
    });

    history.push("/");
  }

  const formik = useFormik({
    initialValues: new Project("", ""),
    onSubmit: (values) => handleCreateProject(values),
  });

  return (
    <>
      <ProjectForm formik={formik} />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "1em",
        }}
      >
        <Button
          disabled={!formik.values.name || !formik.values.description}
          variant="contained"
          color="primary"
          onClick={formik.submitForm}
        >
          Create Project
        </Button>
      </div>
    </>
  );
};

export default CreateProject;
