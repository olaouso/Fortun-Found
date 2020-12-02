import React from "react";
import renderer from "react-test-renderer";
import ProjectDescription from "./index";

it("renders ProjectDescription correctly", () => {
  const tree = renderer.create(<ProjectDescription />).toJSON();
  expect(tree).toMatchSnapshot();
});
