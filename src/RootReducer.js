import { combineReducers } from "redux"
import LoginReducer from "./Store/Login/reducer"


const RootReducer = ()=>combineReducers({
 loginReducer:LoginReducer
})  

export default RootReducer