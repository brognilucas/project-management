import React, { useState } from "react";
import { FunctionComponent } from "react";
import TextField from "@material-ui/core/TextField";
import { FormikConfig, FormikProps, useFormik } from "formik";
import { Project } from "../models/Project.model";
import ListOfTimes from "./ListOfTimes";
import TimeForm from "./TimeForm";
import { Time } from "../models/Time.model";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import { toast } from "react-toastify";

const ProjectForm: FunctionComponent<{
  formik: FormikProps<Project>;
  disabled?: boolean;
}> = ({ formik, disabled = false }) => {
  const [modalHoursOpen, setModalHoursOpen] = useState(false);

  const [time, setTime] = useState({} as Time);
  const [timeDisabled, setTimeDisabled] = useState(false);
  const history = useHistory();

  function addHoursProject(time: Time) {
    formik.values.addProjectHour(time);
  }

  function handleTime(time: Time) {
    if (time.id?.length) {
      formik.values.updateHours(time);
    } else {
      addHoursProject(time);
    }

    setModalHoursOpen(!modalHoursOpen);

    toast.success("Hour added with success", {
      autoClose: 2000,
      position: "bottom-right",
    });
  }

  function editTime(time: Time) {
    setTime(time);
    setModalHoursOpen(true);
  }

  function removeTime(time: Time) {
    formik.values.removeHourById(time.id);
    formik.setValues(formik.values);
  }

  function showTime(time: Time) {
    setTime(time);
    setTimeDisabled(true);
    setModalHoursOpen(true);
  }

  function closeModalTime() {
    setModalHoursOpen(false);
    setTime({} as Time);
    setTimeDisabled(false);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <BackIcon onClick={() => history.push("/")}></BackIcon>
        <Button disabled={disabled} onClick={() => setModalHoursOpen(true)}>
          Add hour
        </Button>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          disabled={disabled}
          label="Name"
          id="name"
          name="name"
          type="text"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.name}
          variant="outlined"
        />
        <TextField
          style={{
            marginTop: "1em",
          }}
          disabled={disabled}
          multiline
          label="Description"
          fullWidth
          variant="outlined"
          rows={5}
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        {!!formik.values.projectHours.length && (
          <ListOfTimes
            disabled={disabled}
            hours={formik.values.projectHours}
            editTime={editTime}
            removeTime={removeTime}
            showDetailsTime={showTime}
          />
        )}
      </form>
      <TimeForm
        time={time}
        disabled={timeDisabled}
        open={modalHoursOpen}
        handleTime={handleTime}
        handleClose={() => closeModalTime()}
      />
    </>
  );
};

export default ProjectForm;
