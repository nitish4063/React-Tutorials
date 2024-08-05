import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../STORE/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingMessage from "./LoadingMessage";
import { useLoaderData } from "react-router-dom";

export const postLoader = async() => {
  return await fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((res) => {
      return res.posts;
    });
};

function PostList() {
  // const { postList } = useContext(PostListData);

  const postList = useLoaderData()

  return (
    <>
      {/* {fetching && <LoadingMessage />} */}
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
