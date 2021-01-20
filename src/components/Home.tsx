import React, { FunctionComponent } from "react";
import ProjectList from "./ProjectList";
import { Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Home: FunctionComponent = ({}) => {
  const history = useHistory();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            textAlign: "left",
          }}
        >
          {" "}
          List of Projects{" "}
        </span>
        <Link
          component="button"
          variant="overline"
          underline="none"
          onClick={() => {
            history.push("/create-project");
          }}
        >
          Create Project
        </Link>{" "}
      </div>
      <ProjectList />
    </>
  );
};

export default Home;
