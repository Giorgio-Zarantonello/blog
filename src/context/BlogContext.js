import React from "react";
import createDataContext from "./createDataContext";

//take it as a pipe  , it will move the information from the Provider , to the Blog 
const BlogContext = React.createContext();
// children : the children component , will be treated as a children inside blog provider , as a prop
// export : the Blogcontext obj will be used inside App.js file , not Default because the default is BlogContext 

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [
                ...state, {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content
                }];
        default: return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title: title, content: content } });
        callback();
    }
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    }
};


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    //demo content , not for production purpose
    [{ title: 'test post', content: 'test content' , id: 10 }]
);