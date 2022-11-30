import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import SinglePost from "./Components/Posts/SinglePost";
import EditPostForm from "./Components/Posts/EditPostForm";

function App() {
  return (
    <div className="app">
      <Nav className="max-w-full" />
      <div className="mx-auto md:max-w-5xl lg:max-w-2xl xl:max-w-5xl">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/post/:postId" element={<SinglePost />}/>
          <Route path="/editpost/:postId" element={<EditPostForm />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
