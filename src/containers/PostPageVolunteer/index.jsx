import React from "react";
import PostPageVolunteerHeader from "../../components/PostPageVolunteerHeader";
import PostList from "../../components/PostList";

export default function PostPageVolunteer() {
  return (
    <div>
      <PostPageVolunteerHeader />
      <PostList collectionName="donatorPost" />
    </div>
  );
}
