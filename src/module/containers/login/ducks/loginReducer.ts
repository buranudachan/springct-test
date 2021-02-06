/**
 * Login  reducer
 */
import { handleActions } from 'redux-actions';
import { LoginActions } from './loginAction';


export const Login_INITIAL_STATE: any = {
    loginDetail: []
};

const LoginReducer = handleActions<any, any>(
    {
        [LoginActions.Type.ADD_USER_DETAIL]: (state, action) => {
            return {
                ...state,
                loginDetail: action.payload
            }
        }
    }, Login_INITIAL_STATE
);

export default LoginReducer;