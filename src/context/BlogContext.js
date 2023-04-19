import React, { useReducer } from "react";

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
}

export const BlogProvider = ({ children }) => {

    //STATIC DATA SOURCE 
    // const BlogPosts = [{ title: 'Blog Post #1' }, { title: 'Blog Post #2' }, { title: 'Blog Post #3' }, { title: 'Blog Post #4' },]
    // DYNAMIC DATA SOURCE with state , instead of doing one function for each functionality...
    // const [blogPosts, setBlogPosts] = useState([]);

    /*
        you can do this , but...we will not 
        const addBlogPost = () => {
            //setter to pass the new value
            setBlogPosts([
                ...blogPosts, {
                    title: `Blog Post #${blogPosts.length + 1}`
                }
            ]);
            const editBlogPost = () => {
            const deleteBlogPost = () => {
            
        }
        // DYNAMIC DATA SOURCE with REDUCER
    */
    const [blogPost, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' });
    };


    return (<BlogContext.Provider value={{ data: blogPost, addBlogPost }}>
        {children}
    </BlogContext.Provider>)
};

export default BlogContext;
