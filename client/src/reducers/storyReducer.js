import {
    ADD_STORY,
    DELETE_STORY,
    GET_STORYS,
} from "../actions/storyAction";


const storyReducer = (state = {storys: []}, action) => {
    switch (action.type) {
        case ADD_STORY:
            console.log(action);
            return state;
        case DELETE_STORY:
            const filteredLinks = state.storys.filter(l => l.id !== action.storyId);
            console.log(filteredLinks);
            return Object.assign({}, state, {storys: filteredLinks});
        case GET_STORYS:
            const currentPage= action.currentPage;
            const sliceLink= state.storys.splice((currentPage-1)*5, 4);
            console.log(sliceLink);
            return Object.assign({}, state, {storys: sliceLink});

        default:
            return state;
    }
};

export default storyReducer;