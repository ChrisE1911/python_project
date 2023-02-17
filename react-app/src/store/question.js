const GET_ALL_QUESTIONS = "/get_all_questions"
const CREATE_ANSWER = "/create_answers"
const UPDATE_ANSWER = "/update_answers"

const getAllQuestionsAction = (data) => ({
    type: GET_ALL_QUESTIONS,
    payload: data,
})

const createAnswersAction = (data) => ({
    type: CREATE_ANSWER,
    payload: data,
})

const updateAnswersAction = (data) => ({
    type: UPDATE_ANSWER,
    payload: data
})



export const thunkGetAllQuestions = () => async (dispatch) => {
    const response = await fetch("/api/questions/all")

    if (response.ok) {
        const data = await response.json();
        dispatch(getAllQuestionsAction(data));

        return data
    }
};

export const thunkCreateAnswer = (question_id, yes_or_no) => async (dispatch) => {
    const response = await fetch("/api/questions/answer-questions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            question_id,
            yes_or_no
        }),
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(createAnswersAction(data))
        return data
    }
}

export const thunkUpdateAnswer = (id, yes_or_no) => async (dispatch) => {
        const response = await fetch("/api/questions/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                yes_or_no
            })
        })
    if (response.ok) {
        const data = await response.json()
        dispatch(updateAnswersAction(data))
        return data
    }
}

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
    switch (action.type) {
        case GET_ALL_QUESTIONS:
            newState = { ...action.payload }
            console.log('PAYLOAD', action.payload)
            return newState;
        case CREATE_ANSWER:
            newState.answerQuestions[action.payload.id] = action.payload
            console.log('ACTION.PAYLOAD', action.payload)
            delete newState.unansweredQuestions[action.payload.question_id]
            // delete newState.answerQuestions[action.payload.id]
            return newState
        case UPDATE_ANSWER:
            const copyNewState = {...state}
            // const answer = action.payload
            delete copyNewState.answerQuestions[action.payload.id]
            copyNewState.answerQuestions[action.payload.id] = action.payload
            return copyNewState
        default:
            return state;
    }
}
