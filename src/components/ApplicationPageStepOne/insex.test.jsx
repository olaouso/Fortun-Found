import React from "react";
import renderer from "react-test-renderer";
import PostSectionStep1 from "./";

it("renders PostSectionStep1 correctly", () => {
  const tree = renderer.create(<PostSectionStep1 />).toJSON();
  expect(tree).toMatchSnapshot();
});
