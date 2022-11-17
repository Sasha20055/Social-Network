const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST"

const profileReducer = (state, action) => {
  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: '0'
      };
      state.postData.push(newPost)
      state.newPostText = ''
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state;
    default:
      return state;
  }
}

export const actionAddPost = () => {
  return {
    type: ADD_POST
  }
}
export const actionOnPostChangePost = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export default profileReducer;