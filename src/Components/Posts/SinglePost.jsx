import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const SinglePost = () => {
  const { postId } = useParams();

  const posts = useSelector((state) =>
  // eslint-disable-next-line
    state.posts.find((post) => post.id == postId)
  );

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col border rounded p-2">
      <h2 className="text-lg font-semibold">
        {posts.title} <span className="block text-sm font-normal italic">by {posts.author},</span>
      </h2>
      <p className="my-5">{posts.content}</p>
    </div>
    <div className="flex justify-start ml-5">
      <Link to="/" className="bg-navColor py-1 px-5 rounded text-white text-base">
        Back
      </Link>
    </div>
    </div>
  );
};

export default SinglePost;
