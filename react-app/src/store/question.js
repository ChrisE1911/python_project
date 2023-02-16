const GET_ALL_QUESTIONS = "/get_all_questions"

const getAllQuestionsAction = (data) => ({
    type: GET_ALL_QUESTIONS,
    payload: data,
})

export const thunkGetAllQuestions = () => async (dispatch) => {
    const response = await fetch("/api/questions/all")

    if (response.ok) {
        const data = await response.json();
        dispatch(getAllQuestionsAction(data));

        return data
    }
};

const initialState = {
    allQuestions: {},
    answerQuestions: {},
    unansweredQuestions: {},
    answeredQuestions: {}
}

const normalize = (arr) => {
	const resultObj = {};
	arr.forEach((element) => (resultObj[element.id] = element));
	return resultObj;
};

export default function questionReducer(state = initialState, action) {
    let newState = { ...state };
    switch(action.type) {
        case GET_ALL_QUESTIONS:
            newState = { ...action.payload }
            console.log('PAYLOAD', action.payload)
            return newState;

        default:
            return state;
    }
}
