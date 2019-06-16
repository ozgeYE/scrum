import {
    ADD_USER,
    DELETE_USER,
    GET_USERS,
} from "../actions/userAction";


const userReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case ADD_USER:
            console.log(action);
            return state;
        case DELETE_USER:
            const filteredLinks = state.users.filter(l => l.id !== action.userId);
            console.log(filteredLinks);
            return Object.assign({}, state, {users: filteredLinks});
        case GET_USERS:
            const currentPage= action.currentPage;
            const sliceLink= state.users.splice((currentPage-1)*5, 4);
            console.log(sliceLink);
            return Object.assign({}, state, {users: sliceLink});

        default:
            const data = JSON.parse(localStorage.getItem('users'));
            console.log(data);
            return data;
    }
};

export default userReducer;