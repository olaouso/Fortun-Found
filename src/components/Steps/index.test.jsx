import React from "react";
import renderer from "react-test-renderer";
import Steps from "./";

it("renders Steps correctly", () => {
  const tree = renderer.create(<Steps />).toJSON();
  expect(tree).toMatchSnapshot();
});
