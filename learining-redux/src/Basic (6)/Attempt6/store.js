import { createStore } from "redux";
import reducer from "./counterReducer/coounterReducer";

const store = createStore(reducer);

export default store;
 