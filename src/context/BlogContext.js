import React from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

//take it as a pipe  , it will move the information from the Provider , to the Blog 
// children : the children component , will be treated as a children inside blog provider , as a prop
// export : the Blogcontext obj will be used inside App.js file , not Default because the default is BlogContext 

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            // ritorno tutto lo state , che e' contenuto nel payload
            return action.payload;
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload);
        case 'edit_blogpost':
            return state.map((blogPost) => {
                // i take the one with the id i'm interested 
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost;
            })
        default: return state;
    }
};

const getBlogPost = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        // response.data === [{} ,{} ,{}]
        dispatch({ type: 'get_blogposts', payload: response.data })
    }
};

const addBlogPost = () => {
    // return (title, content, callback) => {
    //     dispatch({ type: 'add_blogpost', payload: { title: title, content: content } });
    //     if (callback()) callback();
    // }

    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content });
        if (callback()) callback();

    }
};

const deleteBlogPost = (dispatch) => {

    return async id => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blogposts', payload: id });

    }
};

const editBlogPost = dispatch => {
    return async (id,title,content,callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content});
        dispatch({
            type: 'edit_blogpost',
            payload: { id, title, content }
        });
        if (callback()) callback();

    }
};



export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
    //demo content , not for production purpose (pre)
    //now initial data from GET 
    []
);