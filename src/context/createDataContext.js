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
 *
 * 
 * Inside the function, the React.createContext() function is called to create a new context object. 
 * This object is used to share data between components without passing the data down through multiple layers of components.
 * 
 * The provider component is then defined as a functional component that takes a children prop as input. 
 * The useReducer() hook is used to manage the state by initializing it with the reducer and the initial state. 
 * The current state and dispatch function returned from the useReducer() hook are used to create a value object that is passed to the context provider using the value prop.
 * 
 * Finally, the function returns an object containing the context object and the provider component. 
 * The context object can be used to consume the state and dispatch function anywhere in the application by using the useContext() hook, 
 * and the provider component can be used to wrap other components in the application to give them access to the shared state managed by the reducer function.
 */

