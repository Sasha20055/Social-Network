import { accountType, messageType } from './../types/types';
import { dialogsAPI } from "../api/api";
import { usersAPI } from "../api/api";


const SEND_MESSAGE = "dialogs/ADD-MESSAGE";
const LIST_OF_MESSAGES = "dialogs/LIST-OF-MESSAGES";
const DELETE_MESSAGE = "dialogs/DELETE-MESSAGE"
const LIST__OF__DIALOGS = "dialogs/LIST-OF-DIALOGS"
const SET_PAGE_SIZE = "dialogs/SET-PAGE-SIZE"
const SET_TOTAL_MESSAGE_COUNT = "dialogs/SET-TOTAL-MESSAGE-COUNT"
const SET_COUNT_NEW_MESSAGES = "dialogs/SET-COUNT-NEW-MESSAGES"
const SET_CURRENT_PAGE = "dialogs/SET-CURRENT-PAGE"
const SET_PORTION_COUNT = "dialogs/SET-PORTION-COUNT"
const MORE__MESSAGES = "dialogs/MORE-MESSAGES"
const FIND__PERSON = "dialogs/FIND-PERSON"
const DELETE_PERSON = "dialogs/DELETE-PERSON"


let initialState = {
  accounts: [] as Array<accountType>,
  messages: [] as Array<messageType>,
  chatWith: [] as Array<accountType>,
  pageSize: 15 as number | null,
  totalMessageCount: 20 as number | null,
  currentPage: 1 as number | null,
  newMessages: 0 as number | null,
  portionCount: null as number | null
};

type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
      };

    case FIND__PERSON:
      return { ...state, accounts: [...action.accountsFind, ...state.accounts] }

    case MORE__MESSAGES:
      return { ...state, messages: [...action.messages, ...state.messages] }

    case LIST_OF_MESSAGES:
      return { ...state, chatWith: state.accounts.filter(account => account.id == action.userId), messages: action.messages }

    case DELETE_MESSAGE:
      return { ...state, messages: state.messages.filter(message => message.id != action.messageId) }

    case DELETE_PERSON:
      return { ...state, accounts: state.accounts.filter(account => account.id != action.messageId) }

    case SET_PAGE_SIZE:
      return { ...state, pageSize: action.pageSize }

    case SET_PORTION_COUNT:
      return { ...state, portionCount: action.portionCount }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_MESSAGE_COUNT:
      return { ...state, totalMessageCount: action.count }

    case SET_COUNT_NEW_MESSAGES:
      return { ...state, newMessages: action.count }


    case LIST__OF__DIALOGS:
      return { ...state, accounts: action.accounts }

    default:
      return state
  }
}
type actionListOfMessagesType = {
  type: typeof LIST_OF_MESSAGES
  userId: number
  messages: Array<messageType>
}
export const actionListOfMessages = (userId: number, messages: []): actionListOfMessagesType => ({ type: LIST_OF_MESSAGES, userId, messages })
type actionSendMessageType = {
  type: typeof SEND_MESSAGE
  message: messageType
}
export const actionSendMessage = (message: any): actionSendMessageType => ({ type: SEND_MESSAGE, message: message })
type actionDeleteMessageType = {
  type: typeof DELETE_MESSAGE
  messageId: string
}
export const actionDeleteMessage = (messageId: string): actionDeleteMessageType => ({ type: DELETE_MESSAGE, messageId })
type actionListOfDialogsType = {
  type: typeof LIST__OF__DIALOGS
  accounts: Array<accountType>
}
export const actionListOfDialogs = (accounts: []): actionListOfDialogsType => ({ type: LIST__OF__DIALOGS, accounts })
type SetPageSizeType = {
  type: typeof SET_PAGE_SIZE
  pageSize: number
}
export const SetPageSize = (pageSize: number): SetPageSizeType => ({ type: SET_PAGE_SIZE, pageSize });
type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const SetCurrentPage = (currentPage: number): SetCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage });
type SetPortionCountType = {
  type: typeof SET_PORTION_COUNT
  portionCount: number
}
export const SetPortionCount = (portionCount: number): SetPortionCountType => ({ type: SET_PORTION_COUNT, portionCount });
type SetTotalMessageCountType = {
  type: typeof SET_TOTAL_MESSAGE_COUNT
  count: number
}
export const SetTotalMessageCount = (count: number): SetTotalMessageCountType => ({ type: SET_TOTAL_MESSAGE_COUNT, count });
type SetCountOfNewMessagesType = {
  type: typeof SET_COUNT_NEW_MESSAGES
  count: number
}
export const SetCountOfNewMessages = (count: number): SetCountOfNewMessagesType => ({ type: SET_COUNT_NEW_MESSAGES, count });
type SetMoreMessagesType = {
  type: typeof MORE__MESSAGES
  messages: Array<messageType>
}
export const SetMoreMessages = (messagesPort: []): SetMoreMessagesType => ({ type: MORE__MESSAGES, messages: messagesPort });
type SetFindPersonType = {
  type: typeof FIND__PERSON
  accountsFind: Array<accountType>
}
export const SetFindPerson = (accountsFind: Array<accountType>): SetFindPersonType => ({ type: FIND__PERSON, accountsFind });
type SetDeletePersonType = {
  type: typeof DELETE_PERSON
  personId: number
}
export const SetDeletePerson = (personId: number): SetDeletePersonType => ({ type: DELETE_PERSON, personId });



export const startChatting = (userId: number, currentPage: number, pageSize: number) => async (dispatch: any) => {
  let data = await dialogsAPI.listOfMessages(userId, currentPage, pageSize)
  dialogsAPI.startChatting(userId)
  dispatch(SetPageSize(20))
  dispatch(SetCurrentPage(1))
  dispatch(actionListOfMessages(userId, data.items))
  dispatch(SetTotalMessageCount(data.totalCount))
  dispatch(SetPortionCount(Math.ceil(data.totalCount / 20)))
}

export const listOfMessages = (userId: number, currentPage: number | null, pageSize: number | null) => async (dispatch: any) => {
  let data = await dialogsAPI.listOfMessages(userId, currentPage, pageSize)
  dispatch(actionListOfMessages(userId, data.items))
}

export const moreMessages = (userId: number, currentPage: number, pageSize: number, messages: Array<messageType>) => async (dispatch: any) => {
  let data = await dialogsAPI.listOfMessages(userId, currentPage, pageSize)
  let dataItems: Array<messageType> = data.items
  dataItems.filter(message => dispatch(actionDeleteMessage(message.id)))
  dispatch(SetMoreMessages(data.items))
}

export const findPerson = (name: string) => async (dispatch: any) => {
  let data = await usersAPI.searchUsersbyName(1, 10, name)
  let dataItems: Array<accountType> = data.items
  dataItems.filter(account => dispatch(SetDeletePerson(account.id)))
  dispatch(SetFindPerson(data.items))
}

export const sendMessage = (userId: number, message: []) => async (dispatch: any) => {
  let data = await dialogsAPI.sendMessage(userId, message)
  if (data.resultCode === 0) {
    dispatch(listOfMessages(userId, null, null))
  }
}

export const deleteForMe = (messageId: string) => async (dispatch: any) => {
  let data = await dialogsAPI.deleteForMe(messageId)
  if (data.resultCode === 0) {
    dispatch(actionDeleteMessage(messageId))
  }
}

export const messageToSpam = (messageId: string) => async (dispatch: any) => {
  let data = await dialogsAPI.messageToSpam(messageId)
  if (data.resultCode === 0) {
    dispatch(actionDeleteMessage(messageId))
  }
}

export const allDialogs = () => async (dispatch: any) => {
  let data = await dialogsAPI.allDialogs()
  dispatch(actionListOfDialogs(data))
}

export const listOfNewMessages = () => async (dispatch: any) => {
  let data = await dialogsAPI.listOfNewMessages()
  dispatch(SetCountOfNewMessages(data))
}




export default dialogsReducer;