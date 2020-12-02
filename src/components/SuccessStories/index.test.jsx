import React from "react";
import renderer from "react-test-renderer";
import SuccessStories from "./index";

it("renders SuccessStories correctly", () => {
  const tree = renderer.create(<SuccessStories />).toJSON();
  expect(tree).toMatchSnapshot();
});
