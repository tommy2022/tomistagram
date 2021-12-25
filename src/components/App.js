import React from "react";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import Project from "./Project";
import Experience from "./Experience";
import Bio from "./Bio";
import Other from "./Other";
import Options from "./Options";

import { Container, useColorModeValue } from "@chakra-ui/react";

function App() {
  const backcolor = useColorModeValue("gray.50", "blue.800");
  const root = process.env.PUBLIC_URL;
  return (
    <>
      <Header />
      <Container bg={backcolor} maxW="100%" mx="auto">
        <hr />
        <Container maxW="62em" mx="auto">
          <Bio />
          <hr />
          <Options />
          <div id="posts">
            <Switch>
              <Route path={`${root}/`} exact component={Project} />
              <Route path={`${root}/experience`} exact component={Experience} />
              <Route path={`${root}/others`} exact component={Other} />
            </Switch>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default App;
