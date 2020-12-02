import React from "react";
import ProjectDescription from "../../components/ProjectDescription";
import SuccessStories from "../../components/SuccessStories";
import WhoWeAre from "../../components/WhoWeAre";

export default function Home() {
  return (
    <div>
      <ProjectDescription />
      <WhoWeAre />
      <SuccessStories />
    </div>
  );
}
