import React from "react";
import renderer from "react-test-renderer";
import TeamMember from "./";

it("renders TeamMember correctly", () => {
  const tree = renderer.create(<TeamMember />).toJSON();
  expect(tree).toMatchSnapshot();
});
