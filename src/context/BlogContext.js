import React from "react";
import createDataContext from "./createDataContext";

//take it as a pipe  , it will move the information from the Provider , to the Blog 
const BlogContext = React.createContext();
// children : the children component , will be treated as a children inside blog provider , as a prop
// export : the Blogcontext obj will be used inside App.js file , not Default because the default is BlogContext 

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default: return state;

    }
};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    }
};


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost },
    []
);