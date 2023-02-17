const GET_ALL_PICTURES = "/get_all_pictures"
const CREATE_MORE_PICTURES = "/create_more_pictures"

const getAllPicturesAction = (data) => ({
    type: GET_ALL_PICTURES,
    payload: data,
})

const createMorePicturesAction = (data) => ({
    type: CREATE_MORE_PICTURES,
    payload: data,
})

export const thunkGetAllPictures = () => async (dispatch) => {
    const response = await fetch("/api/picture/all");

    if(response.ok) {
        const data = await response.json();
        dispatch(getAllPicturesAction(data));

        return data;
    }
}

export const thunkCreateMorePictures = (data) => async (dispatch) => {
    const response = await fetch("/api/picture/create-additional", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const picture = await response.json();
        dispatch(createMorePicturesAction(picture));
        return picture;
    }
};

const normalize = (arr) => {
	const resultObj = {};
	arr.forEach((element) => (resultObj[element.id] = element));
	return resultObj;
};

const initialState = {
    allPictures: [],
    currentPicture: {}
}

export default function pictureReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_ALL_PICTURES:
            newState = { ...state }
            newState.allPictures = normalize(action.payload)
            return newState
        case CREATE_MORE_PICTURES:
            newState.allPictures[action.payload.id] = action.payload
            newState.currentPicture = action.payload
            return newState
        default:
            return state;
    }
}
