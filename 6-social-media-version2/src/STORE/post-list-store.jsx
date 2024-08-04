import React, { act, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPosList = currPostList;
  if (action.type === "DELETE_POST") {
    newPosList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPosList = [action.payload, ...currPostList];
  } 
  else if (action.type === "ADD_INITIAL_POSTS") {
    newPosList = action.payload.posts;
  }
  return newPosList;
};

const PostListProvider = (props) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (UserID, PostTitle, PostBody, Reactions, Tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: PostTitle,
        body: PostBody,
        reactions: Reactions,
        tags: Tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    console.log("deleted", postId);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, addInitialPosts, deletePost }}>
      {props.children}
    </PostList.Provider>
  );
};



export default PostListProvider;
