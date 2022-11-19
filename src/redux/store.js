import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"


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
    this._state.dialogsData = dialogsReducer(this._state.dialogsData, action)
    this._state.profileData = profileReducer(this._state.profileData, action)
    this._rerenderEntireTree(this._state)
  }
}

export default store;