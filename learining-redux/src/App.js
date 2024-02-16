import React from "react";
import store from "./MiladCourse/file1/redux";

const App = () => {
    return (
        <div>
            <h1>Hi</h1>
            {console.log(store.getState())}
        </div>
    );
};

export default App;
