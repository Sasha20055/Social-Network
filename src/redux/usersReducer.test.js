import UsersReducer, { SetCurrentPage } from "./usersReducer"



it(`don't follow`, () => {
  let action = SetCurrentPage(3);
  let state = {
    currentPage: 1
  }
  let currentPag = UsersReducer(state, action)
  expect(currentPag.currentPage).toBe(3)
})