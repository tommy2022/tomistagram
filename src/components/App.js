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
  return (
    <>
      <Header />
      <Container bg={backcolor} maxW="100%" mx="auto" p={0}>
        <hr />
        <Container maxW="62em" mx="auto">
          <Switch>
            <MainRoute path={"/"} exact component={Experience} />
            <MainRoute path={"/project"} exact component={Project} />
            {/* <MainRoute path={`${root}/courses`} exact component={Courses} /> */}
            {/* <MainRoute path={"/other"} exact component={Other} /> */}
            <Route path={"/tags/:tagname"} component={Tags} />
          </Switch>
        </Container>
      </Container>
    </>
  );
}

export default App;
