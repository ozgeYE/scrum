export const GET_STORYS = "GET_STORYS";
export const GET_STORY = "GET_STORY";
export const ADD_STORY = "ADD_STORY";
export const DELETE_STORY = "REMOVE_STORY";
export const UPDATE_STORY = "UPDATE_STORY";

export const getStorys = () => {
    return {
        type: GET_STORYS
    }
};

export const getStory = (storyId) => {
    return {
        type: GET_STORY,
        storyId
    }
};

export const addStory = (story) => {
    return {
        type: ADD_STORY,
        story
    }
};

export const deleteStory = (storyId) => {
    return {
        type: DELETE_STORY,
        storyId
    }
};

export const updateStory = (storyId, storyData) => {
    return {
        type: UPDATE_STORY,
        storyId,
        storyData
    }
};
