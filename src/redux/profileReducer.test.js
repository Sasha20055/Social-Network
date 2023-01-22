import profileReducer , { actionAddPost } from "./profileReducer";


it('post isnt add', () => {
  let action = actionAddPost('lada')
  let state = {
    postData:
      [
        { id: 1, message: 'Testing props on comments!', likes: '15' },
        { id: 2, message: 'Hello props!!!', likes: '5' },
        { id: 3, message: 'Everybody is coming here)', likes: '23' }
      ]
  };
  let newPost = profileReducer(state, action)
  expect(newPost.postData.length).toBe(4);

});
