const ALL_UNMARKED_USERS = "unmarked/all";


const discoverUserAction = (discoverUsers) => ({
	type: ALL_UNMARKED_USERS,
	payload: discoverUsers,
});

export const thunk_discoverUsers = () => async (dispatch) => {
	const response = await fetch("/api/discover/");
	console.log("INSIDE THUNK");
	if (response.ok) {
		const discoverUsers = await response.json();
		console.log(discoverUsers, "HELLO");
		dispatch(discoverUserAction(discoverUsers));
		return discoverUsers;
	}
};

const initialState = {
	discover_users: {},
};

const normalize = (arr) => {
	const resultObj = {};
	arr.forEach((element) => (resultObj[element.id] = element));
	return resultObj;
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ALL_UNMARKED_USERS:
			return normalize(action.payload.discover_users);

		default:
			return state;
	}
}

// const fetch_unlikes = (ansObj) => ({
//   type: FETCH_MY_UNLIKES,
//   payload: ansObj
// })

// export const fetchUnliked = () => async (dispatch) => {
//   const response = await fetch('/api/users/notlikes',
//       {
//           headers: {
//               'Content-Type': 'application/json'

//           }
//       });
//   if (response.ok) {
//       const data = await response.json();
//       if (data.errors) {
//           return { 'errors': 'Sorry, something went wrong!' };
//       }
//       await dispatch(fetch_unlikes(data))
//       return data
//   }

// }
