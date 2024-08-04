import React, {
  act,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
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
    newPosList = [action.payload.postObj, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPosList = action.payload.posts;
  }

  return newPosList;
};

const PostListProvider = (props) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [fetching, setFetching] = useState(false);

  const addPost = (postObj) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        postObj,
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

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((res) => {
        addInitialPosts(res.posts);
        setFetching(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", err);
        }
      });

    return () => {
      // console.log("cleaning up useEffect");
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
      {props.children}
    </PostList.Provider>
  );
};

export default PostListProvider;
