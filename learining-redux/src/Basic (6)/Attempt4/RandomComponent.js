import React from "react";
import { useSelector, useDispatch } from "react-redux";

const RandomComponent = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.count);
    return (
        <div>
            <h1>{store}</h1>
            <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
        </div>
    );
};

export default RandomComponent;
