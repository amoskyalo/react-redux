import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editPost } from './PostsSlice';
import { useNavigate } from 'react-router-dom'


const EditPostForm = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();

    // eslint-disable-next-line
    const post = useSelector( (state) => state.posts.find(post => post.id == postId));
    const history = useNavigate();

    const[title, setTitle] = useState(post.title);
    const[content, setContent] = useState(post.content);
    const[author, setAuthor] = useState(post.author);

    const titleChange = (e) => setTitle(e.target.value);
    const authorChange = (e) => setAuthor(e.target.value);
    const contentChange = (e) => setContent(e.target.value);


    const saveEdited = (e) =>{
        e.preventDefault();
        dispatch(editPost({id: postId, title, content, author}));
        history(`/post/${postId}`);
    }


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
              onClick={saveEdited}
            >
              Save Post
            </button>
          </div>
        </form>
      </div>
    );
}

export default EditPostForm