const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"

let store = {
  _rerenderEntireTree() {
    console.log('rerenderTree')
  },
  _state: {
    profileData: {
      postData:
        [
          { id: 1, message: 'Testing props on comments!', likes: '15' },
          { id: 2, message: 'Hello props!!!', likes: '5' },
          { id: 3, message: 'Everybody is coming here)', likes: '23' }
        ],
      newPostText: ''
    },
    dialogsData: {
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
    }
  },


  getState() {
    return this._state
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer
  },


  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profileData.newPostText,
        likes: '0'
      };

      this._state.profileData.postData.push(newPost)
      this._state.profileData.newPostText = ''
      this._rerenderEntireTree(this._state)

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profileData.newPostText = action.newText
      this._rerenderEntireTree(this._state)


      
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 5,
        message: this._state.dialogsData.newMessageText,
      };
      
      this._state.dialogsData.messages.push(newMessage)
      this._state.dialogsData.newMessageText = ''
      this._rerenderEntireTree(this._state)

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsData.newMessageText = action.newText
      this._rerenderEntireTree(this._state)
    }
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

export default store;