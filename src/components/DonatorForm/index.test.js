import React from "react";
import renderer from "react-test-renderer";
import DonatorForm from "./index.jsx";

it("renders SuccessStories correctly", () => {
  const tree = renderer.create(<DonatorForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
