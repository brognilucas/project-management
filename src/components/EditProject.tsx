import React, { FunctionComponent, useContext, useEffect } from "react";
import { Project } from "../models/Project.model";
import ProjectForm from "./ProjectForm";
import { Button } from "@material-ui/core";
import { ProjectsContext } from "../context";
import { useFormik } from "formik";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProject: FunctionComponent<{}> = () => {
  const history = useHistory();

  const { name }: any = useParams();
  const { getProjectByName, updateProject } = useContext(ProjectsContext);

  useEffect(() => {
    const project = getProjectByName(name);

    if (project) {
      formik.setValues(project);
    }
  }, []);

  function handleProject(project: Project) {
    updateProject(project);

    toast.success("Project was updated", {
      autoClose: 2000,
      position: "bottom-right",
    });

    history.push("/");
  }

  const formik = useFormik({
    initialValues: new Project("", ""),
    onSubmit: (values) => handleProject(values),
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
          Update Project
        </Button>
      </div>
    </>
  );
};

export default EditProject;
