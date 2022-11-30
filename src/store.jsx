import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "./Components/Posts/PostsSlice";

export default configureStore({
    reducer: {
        posts: PostsSlice
    }
});
