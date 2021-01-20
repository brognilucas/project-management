import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import CreateProject from "../components/CreateProject";
import ViewProject from "../components/ViewProject";
import { ProjectsProvider } from "../context";
import EditProject from "../components/EditProject";

function AppRouter() {
  return (
    <ProjectsProvider>
      <div
        style={{
          marginLeft: "5em",
          marginRight: "5em",
          marginTop: "5em",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Router>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>

            <Route exact={true} path="/create-project">
              <CreateProject />
            </Route>

            <Route exact={true} path="/project/:name">
              <ViewProject />
            </Route>

            <Route exact={true} path="/project/:name/edit">
              <EditProject />
            </Route>
          </Switch>
        </Router>
      </div>
    </ProjectsProvider>
  );
}

export default AppRouter;
