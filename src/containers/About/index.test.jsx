import React from "react";
import renderer from "react-test-renderer";
import About from "./";

it("renders About correctly", () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
