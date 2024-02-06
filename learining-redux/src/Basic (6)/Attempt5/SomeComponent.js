import React from "react";
import { useSelector, useDispatch } from "react-redux";

const SomeComponent = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.count);

    return (
        <div>
            <h1>{store}</h1>
            <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
            <button onClick={() => dispatch({ type: "REMOVE" })}>Remove</button>
        </div>
    );
};

export default SomeComponent;
