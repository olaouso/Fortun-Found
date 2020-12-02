import React from "react";
import renderer from "react-test-renderer";
import ReceiverForm from "./index.jsx";

it("renders SuccessStories correctly", () => {
  const tree = renderer.create(<ReceiverForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
