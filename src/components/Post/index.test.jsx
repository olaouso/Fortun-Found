import React from "react";
import renderer from "react-test-renderer";
import Post from "./index";

it("renders single Post component correctly", () => {
  const tree = renderer.create(<Post />).toJSON();
  expect(tree).toMatchSnapshot();
});
