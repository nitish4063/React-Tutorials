import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../STORE/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingMessage from "./LoadingMessage";

function PostList() {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingMessage />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
