import { FormComponentProps } from "antd/lib/form";
import { RouteComponentProps } from "react-router-dom";

export interface LoginComponentProps extends LoginState, FormComponentProps, RouteComponentProps {
    actions: LoginComponentActions;
}
export interface LoginState {

}
interface LoginComponentActions {
    setUserLoginData(userData: any): void;
}