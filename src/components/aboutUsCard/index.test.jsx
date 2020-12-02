import React from "react";
import renderer from "react-test-renderer";
import AboutUsCard from "./";

it("renders AboutUsCard correctly", () => {
  const tree = renderer.create(<AboutUsCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
