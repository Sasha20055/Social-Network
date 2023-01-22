import dialogsReducer, { actionAddMessage } from './dialogsReducer';

it('message not add', () => {
  let action = actionAddMessage('ladada')
  let store = {
    messages:
      [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Wafsdfadf asdf sda adsafadsf asdf' },
        { id: 3, message: 'FSDF sdfasd dafsdf adf' },
        { id: 4, message: 'Sadfdsa adsfasd ' },
      ],
  };
  let addMessage = dialogsReducer(store, action)
  expect(addMessage.messages.length).toBe(5)
})