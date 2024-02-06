import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Component = () => {
    const store = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{store}</h1>
            <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
            <button onClick={() => dispatch({ type: "REMOVE" })}>REMOVE</button>
        </div>
    );
};

export default Component;
