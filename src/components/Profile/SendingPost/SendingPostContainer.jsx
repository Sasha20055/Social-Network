import { connect } from 'react-redux';
import { actionAddPost, actionOnPostChange } from '../../../redux/profileReducer';
import SendingPost from './SendingPost';


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(actionAddPost())
    },
    postChange: (text) => {
      dispatch(actionOnPostChange(text))
    }
  }
}

const SendingPostContainer = connect(mapStateToProps, mapDispatchToProps)(SendingPost);

export default SendingPostContainer