import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        // actions === { addBlogPost: (dispatch => { return () => { } }}

        const boundActions = {};
        for (let key in actions) {
            // key === actions
            boundActions[key] = actions[key](dispatch);
        }

        return <Context.Provider value={{ state: state, ...boundActions }} >
            {children}
        </Context.Provider>
    }

    return { Context, Provider }
}

/*
 * 
 * This code exports a function that returns a context provider and context object. 
 * The context provider is a Higher-Order Component (HOC) that can be used to provide state management to the components in a React application.
 * The function takes three arguments: a reducer function, an actions object, and an initial state. 
 * The reducer function is responsible for updating the state based on actions dispatched to it. 
 * The actions object contains callback functions that are used to dispatch actions to the reducer function from child components. 
 * The initial state is the initial value of the state managed by the provider.
 * Inside the function, the React.createContext() function is called to create a new context object. 
 * This object is used to share data between components without passing the data down through multiple layers of components.
 * 
 * The provider component is then defined as a functional component that takes a children prop as input. 
 * The useReducer() hook is used to manage the state by initializing it with the reducer and the initial state.
 * 
 * Next, a for...in loop is used to iterate through each key-value pair in the actions object. 
 * For each key, a new function is created that automatically dispatches the corresponding action to the reducer function when called. 
 * The resulting bound functions are stored in a new boundActions object.
 * 
 * Finally, the value prop of the context provider is set to an object containing the current state and the boundActions object using spread syntax. 
 * This makes both the state and the bound actions available to all child components that use the context object.
 * 
 * Overall, this code simplifies the process of creating and using actions with the context provider by automatically binding them to the dispatch function. 
 * This can reduce the amount of boilerplate code required and make it easier to manage the state of the application.
*/