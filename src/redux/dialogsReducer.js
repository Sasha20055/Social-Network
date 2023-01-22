const ADD_MESSAGE = "dialogs/ADD-MESSAGE"

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {

      return {
        ...state,
        messages: [...state.messages, { id: 5, message: action.message, }],
      };
    }

    default:
      return state
  }
}

export const actionAddMessage = (message) => { return { type: ADD_MESSAGE, message: message } }

export default dialogsReducer;