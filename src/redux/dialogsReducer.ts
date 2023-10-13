import { appStateType, InferActionsTypes } from './Store';
import { accountType, messageType, userType } from './../types/types';
import { dialogsAPI } from "../api/dialogsApi";
import { usersAPI } from "../api/usersApi";
import { ThunkAction } from 'redux-thunk';


let initialState = {
  accounts: [] as Array<userType>,
  messages: [] as Array<messageType>,
  chatWith: [] as Array<userType>,
  pageSize: 15 as number | null,
  totalMessageCount: 20 as number | null,
  currentPage: 1 as number | null,
  newMessages: 0 as number | null,
  portionCount: null as number | null
};

type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: actionsType): initialStateType => {
  switch (action.type) {
    case 'dialogs/SEND_MESSAGE':
      return {
        ...state,
      };

    case 'dialogs/FIND__PERSON':
      return { ...state, accounts: [...action.accountsFind, ...state.accounts] }

    case 'dialogs/MORE__MESSAGES':
      return { ...state, messages: [...action.messages, ...state.messages] }

    case 'dialogs/LIST_OF_MESSAGES':
      return { ...state, chatWith: state.accounts.filter(account => account.id == action.userId), messages: action.messages }

    case 'dialogs/DELETE_MESSAGE':
      return { ...state, messages: state.messages.filter(message => message.id != action.messageId) }

    case 'dialogs/DELETE_PERSON':
      return { ...state, accounts: state.accounts.filter(account => account.id != action.personId) }

    case 'dialogs/SET_PAGE_SIZE':
      return { ...state, pageSize: action.pageSize }

    case 'dialogs/SET_PORTION_COUNT':
      return { ...state, portionCount: action.portionCount }

    case 'dialogs/SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage }

    case 'dialogs/SET_TOTAL_MESSAGE_COUNT':
      return { ...state, totalMessageCount: action.count }

    case 'dialogs/SET_COUNT_NEW_MESSAGES':
      return { ...state, newMessages: action.count }

    case 'dialogs/LIST__OF__DIALOGS':
      return { ...state, accounts: action.accounts }

    default:
      return state
  }
}

type actionsType = InferActionsTypes<typeof actions>

export const actions = {
  actionListOfMessages: (userId: number, messages: messageType[]) => ({ type: 'dialogs/LIST_OF_MESSAGES', userId, messages } as const ),
  actionSendMessage: (message: any) => ({ type: 'dialogs/SEND_MESSAGE', message: message } as const ),
  actionDeleteMessage: (messageId: string) => ({ type: 'dialogs/DELETE_MESSAGE', messageId } as const ),
  actionListOfDialogs: (accounts: []) => ({ type: 'dialogs/LIST__OF__DIALOGS', accounts } as const ),
  SetPageSize: (pageSize: number) => ({ type: 'dialogs/SET_PAGE_SIZE', pageSize } as const ),
  SetCurrentPage: (currentPage: number) => ({ type: 'dialogs/SET_CURRENT_PAGE', currentPage } as const ),
  SetPortionCount: (portionCount: number) => ({ type: 'dialogs/SET_PORTION_COUNT', portionCount } as const ),
  SetTotalMessageCount: (count: number) => ({ type: 'dialogs/SET_TOTAL_MESSAGE_COUNT', count } as const ),
  SetCountOfNewMessages: (count: number) => ({ type: 'dialogs/SET_COUNT_NEW_MESSAGES', count } as const ),
  SetMoreMessages: (messagesPort: messageType[]) => ({ type: 'dialogs/MORE__MESSAGES', messages: messagesPort } as const ),
  SetFindPerson: (accountsFind: Array<userType>) => ({ type: 'dialogs/FIND__PERSON', accountsFind } as const ),
  SetDeletePerson: (personId: number) => ({ type: 'dialogs/DELETE_PERSON', personId } as const )
}


type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsType>

export const startChatting = (userId: number, currentPage: number, pageSize: number): thunkType => async (dispatch) => {
  let data = await dialogsAPI.listOfMessages(userId, currentPage, pageSize)
  dialogsAPI.startChatting(userId)
  dispatch(actions.SetPageSize(20))
  dispatch(actions.SetCurrentPage(1))
  dispatch(actions.actionListOfMessages(userId, data.items))
  dispatch(actions.SetTotalMessageCount(data.totalCount))
  dispatch(actions.SetPortionCount(Math.ceil(data.totalCount / 20)))
}

export const listOfMessages = (userId: number, currentPage: number | null, pageSize: number | null): thunkType => async (dispatch) => {
  let data = await dialogsAPI.listOfMessages(userId, currentPage, pageSize)
  dispatch(actions.actionListOfMessages(userId, data.items))
}

export const moreMessages = (userId: number, currentPage: number, pageSize: number): thunkType => async (dispatch) => {
  let data = await dialogsAPI.listOfMessages(userId, currentPage, pageSize)
  let dataItems: Array<messageType> = data.items
  dataItems.filter(message => dispatch(actions.actionDeleteMessage(message.id)))
  dispatch(actions.SetMoreMessages(data.items))
}

export const findPerson = (name: string): thunkType => async (dispatch) => {
  let data = await usersAPI.searchUsersbyName(1, 10, name)
  let dataItems = data.items
  dataItems.filter(account => dispatch(actions.SetDeletePerson(account.id)))
  dispatch(actions.SetFindPerson(data.items))
}

export const sendMessage = (userId: number, message: []): thunkType => async (dispatch) => {
  let data = await dialogsAPI.sendMessage(userId, message)
  if (data.resultCode === 0) {
    dispatch(listOfMessages(userId, null, null))
  }
}

export const deleteForMe = (messageId: string): thunkType => async (dispatch) => {
  let data = await dialogsAPI.deleteForMe(messageId)
  if (data.resultCode === 0) {
    dispatch(actions.actionDeleteMessage(messageId))
  }
}

export const messageToSpam = (messageId: string): thunkType => async (dispatch) => {
  let data = await dialogsAPI.messageToSpam(messageId)
  if (data.resultCode === 0) {
    dispatch(actions.actionDeleteMessage(messageId))
  }
}

export const allDialogs = (): thunkType => async (dispatch) => {
  let data = await dialogsAPI.allDialogs()
  dispatch(actions.actionListOfDialogs(data))
}

export const listOfNewMessages = (): thunkType => async (dispatch) => {
  let data = await dialogsAPI.listOfNewMessages()
  dispatch(actions.SetCountOfNewMessages(data))
}


export default dialogsReducer;