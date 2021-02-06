/**
 * Reducer List
 */

import LoginReducer, { Login_INITIAL_STATE } from '../containers/login/ducks/loginReducer';
import UserReducer, { USER_INITIAL_STATE } from '../containers/userDetail/ducks/userReducers';

const reducerList = {
    userStateData: UserReducer,
    loginStateData: LoginReducer
};

export default reducerList;

type Action = 'PUSH' | 'POP' | 'REPLACE';
const ActionData: Action = 'POP';
export const reducerInitialState = {
    router: { location: { pathname: '', search: '', state: undefined, hash: '' }, action: ActionData },
    userStateData: USER_INITIAL_STATE,
    loginStateData: Login_INITIAL_STATE
};