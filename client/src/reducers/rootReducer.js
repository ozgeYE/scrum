import userReducer from "./userReducer";
import {combineReducers} from 'redux';
import storyReducer from "./storyReducer";

const rootReducer= combineReducers({
    userR: userReducer,
    storyR: storyReducer
});

export default rootReducer;