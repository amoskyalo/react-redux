import { createSlice } from "@reduxjs/toolkit";

const PostsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    editPost: (state, action) => {
      const { id, content, title, author } = action.payload;
      // eslint-disable-next-line
      const oldPost = state.find((post) => post.id == id);
      if (oldPost) {
        oldPost.title = title;
        oldPost.content = content;
        oldPost.author = author;
      }
    },
  },
});

export const { addPost, editPost } = PostsSlice.actions;
export default PostsSlice.reducer;
