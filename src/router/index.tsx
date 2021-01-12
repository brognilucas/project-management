import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import { ProjectsProvider } from "../context";

function AppRouter() {
  return (
    <ProjectsProvider>
      <Router>
        <Switch>
          <Route path="/project">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ProjectsProvider>
  );
}

export default AppRouter;
