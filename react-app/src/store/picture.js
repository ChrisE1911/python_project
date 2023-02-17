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

export const thunkGetAllPictures = (data) => async (dispatch) => {
    const response = await fetch("/api/picture/");

    if(response.ok) {
        const pictures = await response.json();
        dispatch(getAllPicturesAction(pictures));

        return pictures;
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
    allPictures: {},
    currentPicture: {}
}

export default function reducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case GET_ALL_PICTURES:
            newState.allPictures = normalize(action.payload)
            return newState
        case CREATE_MORE_PICTURES:
            newState.allPictures[action.payload.id] = action.payload
            newState.currentPicture = action.payload
            return newState
    }
}
