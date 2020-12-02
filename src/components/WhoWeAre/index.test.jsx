import React from "react";
import renderer from "react-test-renderer";
import WhoWeAre from "./index";

it("renders WhoWeAre correctly", () => {
  const tree = renderer.create(<WhoWeAre />).toJSON();
  expect(tree).toMatchSnapshot();
});
