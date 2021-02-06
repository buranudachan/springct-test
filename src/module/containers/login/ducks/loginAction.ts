import { createAction } from 'redux-actions';


export namespace LoginActions {
    export enum Type {
        ADD_USER_DETAIL = 'ADD_USER_DETAIL',
    }
    export const setUserLoginData = createAction(Type.ADD_USER_DETAIL, (data: any) => data);

}