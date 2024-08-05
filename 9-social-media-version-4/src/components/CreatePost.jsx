import React, {useContext} from "react";
import { PostList } from "../STORE/post-list-store";
import { Form, redirect } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Your UserId
        </label>
        <input
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Enter hashtags with space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </Form>
  );
} 

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);

  // console.log(postData);
  postData.tags = postData.tags.split(" ");

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData)
  })
    .then((res) => res.json())
    .then((resObj) => {
      console.log("response received", resObj);
      // addPost(resObj);
    });

  return redirect('/');
};

export default CreatePost;
