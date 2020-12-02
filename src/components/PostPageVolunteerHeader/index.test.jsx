import React from "react";
import renderer from "react-test-renderer";
import PostPageVolunteerHeader from "./index";

it("renders PostPageVolunteerHeader component correctly", () => {
  const tree = renderer.create(<PostPageVolunteerHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
