/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import PostPageRecieverHeader from "../../components/PostPageRecieverHeader";
import PostList from "../../components/PostList";
// eslint-disable-next-line no-unused-vars
import i18n from "../../i18n";

export default function PostPageVolunteer() {
  return (
    <div>
      <PostPageRecieverHeader />
      <PostList collectionName="receiverPost" />
    </div>
  );
}
