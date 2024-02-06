import reducer from "./reducers/counterReducer";
import { createStore } from "redux";

const store = createStore(reducer);

export default store;
