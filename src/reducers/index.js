import { combineReducers } from "redux";
import dashboard from "./dashboard";
import admin from './admin'
import wallet from './wallet'
import bounty from './bounty'
import airdrop from './airdrop'

const rootReducer = combineReducers({
	dashboard,
	admin,
	wallet,
	bounty,
	airdrop
})

export default rootReducer;