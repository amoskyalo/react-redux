import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./PostsSlice";

const AddPost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [active, setActive] = useState(false);

  const titleChange = (e) => setTitle(e.target.value);
  const contentChange = (e) => setContent(e.target.value);
  const authorChange = (e) => setAuthor(e.target.value);

  const onSavePostClicked = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    if (title && author && content) {
      dispatch(addPost({ id, title, content, author }));
      setAuthor("");
      setContent("");
      setTitle("");
    }

    setActive(!active);
  };

  if (active) {
    return (
      <div className="mx-1 md:m-4">
        <h2 className="text-3xl font-bold mb-3">Add a New Post</h2>
        <form action="#">
          <label htmlFor="#" className="block text-2xl font-bold">
            Post Title:
            <input
              className="block border border-borderColor min-w-full py-2 px-1 outline-none rounded text-lg font-medium"
              type="text"
              placeholder="Post title"
              onChange={titleChange}
              value={title}
            />
          </label>
          <label htmlFor="#" className="block mt-5 text-2xl font-bold">
            Author:
            <input
              className="block border border-borderColor min-w-full py-2 px-1 outline-none rounded text-lg font-medium"
              type="text"
              placeholder="Name of the author"
              onChange={authorChange}
              value={author}
            />
          </label>
          <label htmlFor="#" className="block mt-5 text-2xl font-bold">
            Content:
            <textarea
              className="block border border-borderColor min-w-full py-2 px-1 outline-none rounded text-lg font-medium"
              type="text"
              placeholder="Whats on your mind?"
              onChange={contentChange}
              value={content}
            ></textarea>
          </label>
          <div className="flex justify-center mt-5">
            <button
              className={`bg-navColor max-w-max text-white py-1.5 px-4 rounded text-lg cursor-pointer pointer-events-none opacity-50 ${
                title && author && content
                  ? `opacity-100 pointer-events-auto`
                  : ""
              }`}
              onClick={onSavePostClicked}
            >
              Save Post
            </button>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className="flex justify-end mr-10">
      <button
        className="bg-navColor py-1 px-5 text-lg font-semibold text-white rounded"
        onClick={() => setActive(!active)}
      >
        <span>+</span> create new post
      </button>
    </div>
  );
};

export default AddPost;
