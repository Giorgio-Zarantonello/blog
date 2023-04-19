import React, { useState } from "react";

//take it as a pipe  , it will move the information from the Provider , to the Blog 
const BlogContext = React.createContext();
// children : the children component , will be treated as a children inside blog provider , as a prop
// export : the Blogcontext obj will be used inside App.js file , not Default because the default is BlogContext 
export const BlogProvider = ({ children }) => {

    //STATIC DATA SOURCE 
    // const BlogPosts = [{ title: 'Blog Post #1' }, { title: 'Blog Post #2' }, { title: 'Blog Post #3' }, { title: 'Blog Post #4' },]
    // DYNAMIC DATA SOURCE 
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        //setter to pass the new value
        setBlogPosts([
            ...blogPosts, {
                title: `Blog Post #${blogPosts.length + 1}`
            }
        ]);
    }

    return <BlogContext.Provider value={{ data : blogPosts , addBlogPost}}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;
