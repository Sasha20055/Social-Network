import dialogsReducer, { actionDeleteMessage } from './dialogsReducer';

it('message not delete', () => {
  let action = actionDeleteMessage("e068cf54-c5e9-48b1-8b79-17ce2fd68849")
  let store = {
    messages:
      [
        { id: "25504a36-0456-40be-8d54-fdf2503a08d9", message: 'Hi' },
        { id: "e068cf54-c5e9-48b1-8b79-17ce2fd68849", message: 'Wafsdfadf asdf sda adsafadsf asdf' },
      ],
  };
  let deleteMessage = dialogsReducer(store, action)
  expect(deleteMessage.messages.length).toBe(1)
})