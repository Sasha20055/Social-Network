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
        ]
    }
  },


  getState() {
    return this._state
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer
  },


  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profileData.newPostText,
        likes: '0'
      };

      this._state.profileData.postData.push(newPost)
      this._state.profileData.newPostText = ''
      this._rerenderEntireTree(this._state)
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profileData.newPostText = action.newText
      this._rerenderEntireTree(this.state)

    }
  }
}

export default store;