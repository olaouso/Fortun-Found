import React from "react";
import renderer from "react-test-renderer";
import PostPageRecieverHeader from "./index";

it("renders PostPageRecieverHeader component correctly", () => {
  const tree = renderer.create(<PostPageRecieverHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
