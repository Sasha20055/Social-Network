const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"

let initialState = {
  accounts:
    [
      { id: 1, name: 'Mr Ben', ava: 'https://cdn-icons-png.flaticon.com/512/147/147133.png' },
      { id: 2, name: 'Mom', ava: 'https://cdn-icons-png.flaticon.com/512/147/147142.png' },
      { id: 3, name: 'Pap', ava: 'https://cdn-icons-png.flaticon.com/512/147/147133.png' },
      { id: 4, name: 'Gurry', ava: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
      { id: 5, name: 'GrandMother', ava: 'https://cdn-icons-png.flaticon.com/512/147/147142.png' },
    ],
  messages:
    [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'Wafsdfadf asdf sda adsafadsf asdf' },
      { id: 3, message: 'FSDF sdfasd dafsdf adf' },
      { id: 4, message: 'Sadfdsa adsfasd ' },
    ],
  newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      let stateCopy = { ...state }
      stateCopy.messages = [...state.messages]
      stateCopy.messages.push(newMessage)
      stateCopy.newMessageText = ''
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state }
      stateCopy.newMessageText = action.newText
      return stateCopy;
    }
    default:
      return state
  }
}

export const actionAddMessage = () => {
  return {
    type: ADD_MESSAGE
  }
}
export const actionOnPostChangeMessage = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
}

export default dialogsReducer;