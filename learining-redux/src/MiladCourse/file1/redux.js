import { createStore } from "redux";

const initialState = {
    author: "ali",
    number: 22,
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NUMBER":
            return {
                ...state,
                number: state.number + 1,
            };

        case "REMOVE_NUMBER":
            return {
                ...state,
                number: state.number - 1,
            };

        case "CUSTOM_NUMBER":
            return {
                ...state,
                number: state.number + action.payload,
            };

        default:
            return state;
    }
};

const addNum = () => {
    return {
        type: "ADD_NUMBER",
    };
};

const removeNum = () => {
    return {
        type: "REMOVE_NUMBER",
    };
};

const customNum = (num) => {
    return {
        type: "CUSTOM_NUMBER",
        payload: num,
    };
};

const store = createStore(mainReducer);

store.dispatch(addNum());
store.dispatch(removeNum());
store.dispatch(customNum(3));

// console.log(store.getState());
// console.log("hi");

export default store;
