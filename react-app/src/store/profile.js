const CREATE_PROFILE = '/create_profile'

const createProfileAction = (data) => ({
  type: CREATE_PROFILE,
  payload: data
});

export const thunkCreateProfile = (data) => async (dispatch) => {

  const response = await fetch('/api/profile/create', {
    method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
    body: JSON.stringify(data)
  })
  console.log(response)
  if(response.ok){
    const data = await response.json();
    dispatch(createProfileAction(data))
    return data;
  }
}


const initialState = {profile:{}};

export default function profileReducer(state=initialState, action){
  let newState = { ...state }
  switch(action.type){
    case CREATE_PROFILE:
      let profileInfo = action.payload
      newState.profile = profileInfo
      return newState
  }
}
