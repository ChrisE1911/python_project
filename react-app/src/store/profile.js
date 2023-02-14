const CREATE_PROFILE = '/create_profile'
const CURRENT_USER_PROFILE = '/current_user_profile'

const createProfileAction = (data) => ({
  type: CREATE_PROFILE,
  payload: data
});

const currentUserProfileAction = (data) => ({
  type: CURRENT_USER_PROFILE,
  payload: data
})

export const thunkCreateProfile = (data) => async (dispatch) => {

  const response = await fetch('/api/profile/create', {
    method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
    body: JSON.stringify(data)
  })
  if(response.ok){
    const profileData = await response.json();
    const addPicture = await fetch('/api/picture/create', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    console.log(data.picture_url)
    if(addPicture.ok){
      const newPicture = await addPicture.json()
      const newObj= {...profileData, ...newPicture}
      console.log(newObj)
      dispatch(createProfileAction(newObj))
      return newObj;
    }
  }
}

export const thunkCurrentUserProfile = () => async (dispatch) => {

  const response = await fetch('/api/users/current_user')

  if(response.ok){
    const data = await response.json();
    dispatch(currentUserProfileAction(data))
    return data
  }
}


const initialState = {
  profile:{},
  current_user_profile:{}
};

export default function profileReducer(state=initialState, action){
  let newState = { ...state }
  switch(action.type){
    case CREATE_PROFILE:
      let profileInfo = action.payload
      newState.profile = profileInfo
      return newState
    case CURRENT_USER_PROFILE:
      let currentProfile = action.payload
      newState.current_user_profile = currentProfile
      return newState
    default: {
      return state
    }
  }
}