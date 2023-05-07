import { dialogsAPI } from "../api/api";


const SEND_MESSAGE = "dialogs/ADD-MESSAGE";
const LIST_OF_MESSAGES = "dialogs/LIST-OF-MESSAGES";
const DELETE_MESSAGE = "dialogs/DELETE-MESSAGE"
const LIST__OF__DIALOGS = "dialogs/LIST-OF-DIALOGS"
const SET_PAGE_SIZE = "dialogs/SET-PAGE-SIZE"
const SET_TOTAL_MESSAGE_COUNT = "dialogs/SET-TOTAL-MESSAGE-COUNT"
const SET_COUNT_NEW_MESSAGES = "dialogs/SET-COUNT-NEW-MESSAGES"
const SET_CURRENT_PAGE = "dialogs/SET-CURRENT-PAGE"
const SET_PORTION_COUNT = "dialogs/SET-PORTION-COUNT"


let initialState = {
  accounts: [],
  messages: [],
  chatWith: [],
  pageSize: 5,
  totalMessageCount: 6,
  currentPage: 1,
  newMessages: 0,
  portionCount: null
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: state.messages.length + 1, message: action.message, }],
      };

    case LIST_OF_MESSAGES:
      return { ...state, chatWith: state.accounts.filter(account => account.id == action.userId), messages: action.messages }

    case DELETE_MESSAGE:
      return { ...state, messages: state.messages.filter(message => message.id != action.messageId) }

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



export const actionListOfMessages = (userId, messages) => ({ type: LIST_OF_MESSAGES, userId, messages })
export const actionSendMessage = (message) => ({ type: SEND_MESSAGE, message: message })
export const actionDeleteMessage = (messageId) => ({ type: DELETE_MESSAGE, messageId })
export const actionListOfDialogs = (accounts) => ({ type: LIST__OF__DIALOGS, accounts })
export const SetPageSize = (pageSize) => ({ type: SET_PAGE_SIZE, pageSize });
export const SetCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const SetPortionCount = (portionCount) => ({ type: SET_PORTION_COUNT, portionCount });
export const SetTotalMessageCount = (count) => ({ type: SET_TOTAL_MESSAGE_COUNT, count });
export const SetCountOfNewMessages = (count) => ({ type: SET_COUNT_NEW_MESSAGES, count });



export const startChatting = (userId, currentPage, pageSize) => async (dispatch) => {
  let data = await dialogsAPI.listOfMessages(userId, currentPage, pageSize)
  dialogsAPI.startChatting(userId)
  dispatch(SetPageSize(5))
  dispatch(SetCurrentPage(1))
  dispatch(actionListOfMessages(userId, data.items))
  dispatch(SetTotalMessageCount(data.totalCount))
  dispatch(SetPortionCount(Math.ceil(data.totalCount / 20)))
}

export const listOfMessages = (userId, currentPage, pageSize) => async (dispatch) => {
  let data = await dialogsAPI.listOfMessages(userId, currentPage, pageSize)
  dispatch(actionListOfMessages(userId, data.items))
}

export const sendMessage = (userId, message) => async (dispatch) => {
  let data = await dialogsAPI.sendMessage(userId, message)
  if (data.resultCode === 0) {
    dispatch(listOfMessages(userId))
  }
}

export const deleteForMe = (messageId) => async (dispatch) => {
  let data = await dialogsAPI.deleteForMe(messageId)
  if (data.resultCode === 0) {
    dispatch(actionDeleteMessage(messageId))
  }
}

export const messageToSpam = (messageId) => async (dispatch) => {
  let data = await dialogsAPI.messageToSpam(messageId)
  if (data.resultCode === 0) {
    dispatch(actionDeleteMessage(messageId))
  }
}

export const allDialogs = () => async (dispatch) => {
  let data = await dialogsAPI.allDialogs()
  dispatch(actionListOfDialogs(data))
}

export const listOfNewMessages = () => async (dispatch) => {
  let data = await dialogsAPI.listOfNewMessages()
  dispatch(SetCountOfNewMessages(data))
}




export default dialogsReducer;