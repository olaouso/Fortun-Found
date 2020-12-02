import React from "react";
import renderer from "react-test-renderer";
import OurTeam from "./";

it("renders OurTeam correctly", () => {
  const tree = renderer.create(<OurTeam />).toJSON();
  expect(tree).toMatchSnapshot();
});
