import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  const sliceText = (num, str) =>{
    if(str.length > num){
      return str.slice(0, num) + "...";
    }else return str
  }


  return (
    <div className="mx-1 mb-4 md:mx-4">
      <h2 className="text-3xl font-bold mb-4">Posts</h2>
      <div className="flex flex-col gap-3">
        {posts.map((post, i) => (
          <div
            className="border border-black rounded-sm p-2 md:rounded md:p-3"
            key={i}
          >
            <h2 className="font-semibold text-xl">{post.title}</h2>
            <p className="my-5">{sliceText(500, post.content)}</p>
            <div className="flex flex-row justify-between">
              <Link
                to={`/post/${post.id}`}
                className="text-base border rounded py-2 px-5"
              >
                View Post
              </Link>
              <Link
                to={`/editpost/${post.id}`}
                className="text-base border rounded py-2 px-5"
              >
                Edit Post
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
