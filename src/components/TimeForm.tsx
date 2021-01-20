import React, { FunctionComponent, useEffect } from "react";
import { Project } from "../models/Project.model";
import { useFormik } from "formik";
import { Time } from "../models/Time.model";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";

const TimeForm: FunctionComponent<{
  open: boolean;
  handleTime: Function;
  time?: Time;
  handleClose: any;
  disabled: boolean;
}> = ({
  open,
  handleTime,
  time = { hour: 0, description: "", id: "" },
  handleClose,
  disabled = false,
}) => {
  useEffect(() => {
    if (time.id) {
      formik.setValues(time);
    }
  }, [time]);

  const formik = useFormik({
    initialValues: time,
    onSubmit: (values: Time) => {
      handleTime(values)
      formik.resetForm();
    },
  });

  return (
    <Dialog aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title">
        Add hours to a Project{" "}
      </DialogTitle>
      <DialogContent dividers>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            disabled={disabled}
            label="Hours"
            id="hour"
            name="hour"
            type="number"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.hour}
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
        </form>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="secondary">
          Cancel
        </Button>

        <Button
          autoFocus
          type="submit"
          disabled={disabled}
          onClick={formik.submitForm}
          color="primary"
        >
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TimeForm;
