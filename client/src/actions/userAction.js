export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "REMOVE_USER";
export const UPDATE_USER = "UPDATE_USER";

export const getUsers = () => {
    return {
        type: GET_USERS
    }
};

export const getUser = (userId) => {
    return {
        type: GET_USER,
        userId
    }
};

export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
};

export const deleteUser = (userId) => {
    return {
        type: DELETE_USER,
        userId
    }
};

export const updateUser = (userId, userData) => {
    return {
        type: UPDATE_USER,
        userId,
        userData
    }
};
