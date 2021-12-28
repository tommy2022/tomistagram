import React from "react";
import Header from "./Header/Header";
import { Route, Switch } from "react-router-dom";
import MainRoute from "./MainRoute";
import Project from "./Project";
import Experience from "./Experience";
import Other from "./Other";
import Courses from "./Courses";
import Tags from "./Tags";

import { Container, useColorModeValue } from "@chakra-ui/react";

function App() {
  const backcolor = useColorModeValue("gray.50", "rgb(26, 32, 44)");
  const root = process.env.PUBLIC_URL;
  return (
    <>
      <Header />
      <Container bg={backcolor} maxW="100%" mx="auto" p={0}>
        <hr />
        <Switch>
          <MainRoute path={`${root}/`} exact component={Experience} />
          <MainRoute path={`${root}/project`} exact component={Project} />
          {/* <MainRoute path={`${root}/courses`} exact component={Courses} /> */}
          <MainRoute path={`${root}/other`} exact component={Other} />
          <Route path={`${root}/tags/:tagname`} component={Tags} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
