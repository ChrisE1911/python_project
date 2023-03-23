//store
const GET_MATCHES = "/get/matches";
const DELETE_MATCH = "/delete/match";
const actionGetMatches = (allMatches) => ({
	type: GET_MATCHES,
	payload: allMatches,
});
const actionDeleteMatch = () => ({
	type: DELETE_MATCH,
	payload: "someid",
});

export const thunkGetMatches = () => async (dispatch) => {
	const response = await fetch(`/api/matches/user_matches`);
	if (response.ok) {
		const allMatches = await response.json();
		dispatch(actionGetMatches(allMatches));
		return allMatches;
	}
};
// export const thunkDeleteMatch = () => async (dispatch) => {
// 	dispatch(actionDeleteMatch());
// };
const normalize = (arr) => {
	const resultObj = {};
	arr.forEach((element) => (resultObj[element.id] = element));
	return resultObj;
};
const initialState = {
	matches: [],
};
export default function matchesReducer(state = initialState, action) {
	let newState;
	switch (action.type) {
		case GET_MATCHES:
			newState = { ...state };
			newState.matches = normalize(action.payload);
			return newState;
		default:
			return state;
	}
}
