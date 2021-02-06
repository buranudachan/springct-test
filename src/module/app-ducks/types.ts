/**
 * Global Interface
 */

import { RouterState } from 'connected-react-router';
import { LoginState } from '../containers/login/ducks/types';
import { UserState } from '../containers/userDetail/ducks/types';

// Application State
export interface ApplicationState {
    router: RouterState;
    userStateData: UserState,
    loginStateData: LoginState
}
