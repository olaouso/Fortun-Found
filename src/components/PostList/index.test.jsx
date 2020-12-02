import React from "react";
import renderer from "react-test-renderer";
import PostList from "./index";

it("renders  PostList component correctly", () => {
  const tree = renderer.create(<PostList />).toJSON();
  expect(tree).toMatchSnapshot();
});
