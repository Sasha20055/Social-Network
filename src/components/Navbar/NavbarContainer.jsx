import {connect} from "react-redux"
import Navbar from "./Navbar";


let mapStateToProps = (state) => {
  return{
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, {})(Navbar)