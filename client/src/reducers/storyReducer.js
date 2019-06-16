import {
    ADD_STORY,
    DELETE_STORY,
    GET_STORYS,
} from "../actions/storyAction";


const storyReducer = (state = {stories: []}, action) => {
    switch (action.type) {
        case GET_STORYS:
            console.log(action);
            return Object.assign({}, state, {stories: action.stories});
        case ADD_STORY:
            console.log(action);
            return state;
        case DELETE_STORY:
            const filteredLinks = state.storys.filter(l => l.id !== action.storyId);
            console.log(filteredLinks);
            return Object.assign({}, state, {storys: filteredLinks});

        default:
            return state;
    }
};

export default storyReducer;