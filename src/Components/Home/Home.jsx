import React from "react";
import Posts from "../Posts/Posts";
import AddPost from "../Posts/AddPost";
import Nothing from "../Posts/Nothing";
import { useSelector } from "react-redux";

const Home = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <React.Fragment>
      <AddPost />
      {posts.length ? <Posts /> : <Nothing />}
    </React.Fragment>
  );
};

export default Home;
