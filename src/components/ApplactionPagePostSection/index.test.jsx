import React from "react";
import renderer from "react-test-renderer";
import PostSection from "./";

it("renders PostSection correctly", () => {
  const tree = renderer.create(<PostSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
