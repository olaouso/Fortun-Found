import React from "react";
import renderer from "react-test-renderer";
import ContactForm from "./index";

it("renders ContactForm correctly", () => {
  const tree = renderer.create(<ContactForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
