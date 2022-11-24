const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST"

let initialState = {
  postData:
    [
      { id: 1, message: 'Testing props on comments!', likes: '15' },
      { id: 2, message: 'Hello props!!!', likes: '5' },
      { id: 3, message: 'Everybody is coming here)', likes: '23' }
    ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: '0'
      };
      let stateCopy = { ...state }
      stateCopy.postData = [...state.postData]
      stateCopy.postData.push(newPost)
      stateCopy.newPostText = ''
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state }
      stateCopy.newPostText = action.newText
      return stateCopy;
    }
    default:
      return state;
  }
}

export const actionAddPost = () => {
  return {
    type: ADD_POST
  }
}
export const actionOnPostChange = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export default profileReducer;