import React from "react";
import { Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Bio from "./Bio/Bio";
import Tabs from "./Tabs/Tabs";

function MainRoute({ component: Component, audience, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Container maxW="62em" mx="auto">
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
