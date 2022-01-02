import React from "react";
import { Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Bio from "./Summary/Bio";
import Tabs from "./Tabs/Tabs";

function MainRoute({ component: Component, audience, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Container maxW="100%">
          <Bio />
          <hr />
          <Tabs />
          <div id="posts">
            <Component {...props} />
          </div>
        </Container>
      )}
    />
  );
}

export default MainRoute;
