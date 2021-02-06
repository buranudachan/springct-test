/**
 * Selectors for User Detail
 */
import { createSelector } from 'reselect';
import { ApplicationState } from '../../../app-ducks/types';
import { LoginState } from './types';

export const fetchLoginData = (state: ApplicationState) => state.loginStateData;

const loginSelecter = {
    getLoginData: createSelector(
        [fetchLoginData],
        (data: LoginState) => data
    )
};

export default loginSelecter;