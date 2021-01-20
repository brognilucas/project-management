import React, { FunctionComponent } from "react";
import { Project } from "../models/Project.model";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ViewIcon from "@material-ui/icons/Visibility";
import { Time } from "../models/Time.model";
const ListOfTimes: FunctionComponent<{
  hours: Time[];
  editTime: Function;
  showDetailsTime: Function;
  removeTime: Function;
  disabled: boolean;
}> = ({ hours, editTime, showDetailsTime, removeTime, disabled }) => {
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
          <TableCell>Amount of Hours</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {hours.map((time: Time) => (
          <TableRow hover role="checkbox" tabIndex={-1} key={time.id}>
            <TableCell key="hour">{time.hour}</TableCell>
            <TableCell key="description">{time.description}</TableCell>
            <TableCell key="actions">
              {!disabled && (
                <>
                  <EditIcon onClick={() => editTime(time)} />
                  <DeleteIcon onClick={() => removeTime(time)} />
                </>
              )}
              <ViewIcon onClick={() => showDetailsTime(time)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListOfTimes;
