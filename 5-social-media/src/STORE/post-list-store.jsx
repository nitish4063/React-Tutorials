import React, { act, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
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
  return newPosList;
};

const PostListProvider = (props) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
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
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {props.children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Mumbai",
    body: "Hi Friends, i am going to mumbai for my vacations. Hope to enjoy a lot.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Paas Hogya",
    body: "Finally Graduated!! 4 saal khatam hogye pata hi nhi chala",
    reactions: 15,
    userId: "user-12",
    tags: ["graduating", "Btech"],
  },
];

export default PostListProvider;
