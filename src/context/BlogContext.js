import React from "react";

//take it as a pipe  , it will move the information from the Provider , to the Blog 
const BlogContext = React.createContext();
// children : the children component , will be treated as a children inside blog provider , as a prop
// export : the Blogcontext obj will be used inside App.js file , not Default because the default is BlogContext 
export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider>
        {children}
    </BlogContext.Provider>
}
