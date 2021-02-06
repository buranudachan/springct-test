import React, { FormEvent } from "react";
import { ApplicationState } from "../../app-ducks/types";
import { omit } from "lodash";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { LoginActions } from "./ducks/loginAction";
import { LoginComponentProps } from "./ducks/types";
import loginSelecter from "./ducks/loginSelecter";
import FormItem from "antd/lib/form/FormItem";
import { Button, Form, Input, Modal } from "antd";

class Login extends React.Component<LoginComponentProps, any> {
    constructor(props: LoginComponentProps) {
        super(props);
        this.state = {
            isUserLogged: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <div className="gx-app-login-wrap">
                <div className="gx-app-login-container">
                    <div className="gx-app-login-main-content">

                        <div className="gx-app-login-content gx-mt-0">
                            <Form
                                onSubmit={this.handleSubmit}
                            >
                                <FormItem {...formItemLayout} label="Username">
                                    {getFieldDecorator("userName", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "The input your username!",
                                            },
                                        ],
                                    })(<Input placeholder="userName" />)}
                                </FormItem>
                                <FormItem {...formItemLayout} label="Password">
                                    {getFieldDecorator("password", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "Please input your Password!",
                                            },
                                        ],
                                    })(<Input type="password" placeholder="Password" />)}
                                </FormItem>

                                <br></br>
                                <br></br>
                                <FormItem>
                                    <div className="center">
                                        <Button
                                            className="gx-mb-0 gx-text-white"
                                            htmlType="submit"
                                            block
                                            style={{
                                                borderRadius: "20px",
                                                backgroundColor: "#1eb2a6",
                                            }}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    private handleSubmit(e: FormEvent) {
        e.preventDefault();
        this.props.form &&
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    values.isUser = "Admin";
                    localStorage.setItem("userData", JSON.stringify(values));
                    this.props.history.push("/userDetail");
                }
            });
    }
}
const mapStateToProps = (state: ApplicationState) => {
    return {
        ...loginSelecter.getLoginData(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            ...bindActionCreators(omit(LoginActions, ["Type"]) as any, dispatch),
        },
    };
};
const loginForm = Form.create<LoginComponentProps>()(Login);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(loginForm);
