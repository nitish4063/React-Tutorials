import React, { useContext, useRef } from "react";
import { PostList } from "../STORE/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const tags = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("sending req to server");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId.current.value,
        title: postTitle.current.value,
        body: postBody.current.value,
        reactions: reactions.current.value,
        tags: tags.current.value.split(" "),
      }),
    })
      .then((res) => res.json())
      .then((resObj) => {
        console.log("response received", resObj);
        addPost(resObj);
      });

    /*
    addPost(
      userId.current.value,
      postTitle.current.value,
      postBody.current.value,
      reactions.current.value,
      tags.current.value.split(" ")
    ); */

    userId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Your UserId
        </label>
        <input
          ref={userId}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter Your UserId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitle}
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBody}
          type="text"
          rows={4}
          className="form-control"
          id="body"
          placeholder="How are you feeling today?..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions:
        </label>
        <input
          ref={reactions}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtags
        </label>
        <input
          type="text"
          ref={tags}
          className="form-control"
          id="tags"
          placeholder="Enter hashtags with space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </form>
  );
}

export default CreatePost;
