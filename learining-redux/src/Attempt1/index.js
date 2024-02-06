import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../App";
import { configureStore } from "@reduxjs/toolkit";

const add = () => {
    return {
        type: "ADD",
    };
};

const remove = () => {
    return {
        type: "REMOVE",
    };
};

const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return state + 1;
        case "REMOVE":
            return state - 1;
        default:
            return state;
    }
};

let store = configureStore({ reducer });

store.subscribe(() => console.log(store.getState()));

store.dispatch(add());
store.dispatch(remove());
store.dispatch(add());
store.dispatch(add());
store.dispatch(add());

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
