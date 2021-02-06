import React, { FormEvent } from "react";
import { omit } from "lodash";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import FormItem from "antd/lib/form/FormItem";
import { Button, Col, Form, Input, Modal, Radio, Row, Tooltip } from "antd";
import { AddUserFromProps } from "../ducks/types";

class AddUsersForm extends React.Component<AddUserFromProps, any> {
    constructor(props: AddUserFromProps) {
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
            <div >
                <Modal
                    title="Add User"
                    visible={true}
                    footer={false}
                    width="60%"
                    closable={false}
                >
                    <Form
                        onSubmit={this.handleSubmit}
                        className="gx-signin-form gx-form-row0"
                    >
                        <Row>
                            <Col span={12}>
                                <FormItem {...formItemLayout} label="First Name">
                                    {getFieldDecorator("first_name", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "Please enter First Name!",
                                            },
                                        ],
                                    })(<Input placeholder="First Name" />)}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem {...formItemLayout} label="Last Name">
                                    {getFieldDecorator("last_name", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "Please enter Last Name!",
                                            },
                                        ],
                                    })(<Input placeholder="Last Name" />)}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <FormItem {...formItemLayout} label="Address  ">
                                    {getFieldDecorator("address", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "Please enter Address!",
                                            },
                                        ],
                                    })(<Input type="address" placeholder="Address" />)}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem {...formItemLayout} label="Phone No  ">
                                    {getFieldDecorator("phoneNumber", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "Please enter Phone Number!",
                                            },
                                        ],
                                    })(<Input placeholder="Phone Number" />)}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <FormItem {...formItemLayout} label="Role      ">
                                    {getFieldDecorator("role", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "Please select Role!",
                                            },
                                        ],
                                    })(<Radio.Group>
                                        <Radio value="Admin">Admin</Radio>
                                        <Radio value="HOD">HOD</Radio>
                                    </Radio.Group>)}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem {...formItemLayout} label="Email     ">
                                    {getFieldDecorator("email", {
                                        rules: [
                                            {
                                                required: true,
                                                message: "Please enter email!",
                                            },
                                        ],
                                    })(<Input type="email" placeholder="email" />)}
                                </FormItem>
                            </Col>
                        </Row>  <br></br>
                        <br></br>
                        <FormItem {...tailFormItemLayout}>
                            <Row className="gx-pb-0">
                                <Col span={18}></Col>
                                <Col span={3}>
                                    <button className="ant-btn ant-btn-primary ant-btn-background-ghost gx-pb-0 gx-mt-2">
                                        Add                                    </button>
                                </Col>
                                <Col span={3}>
                                    <button
                                        className="ant-btn ant-btn-danger ant-btn-background-ghost gx-pb-0 gx-mt-2"
                                        onClick={() => this.props.close()}
                                    >
                                        Cancel                                    </button>
                                </Col>
                            </Row>
                        </FormItem>
                    </Form>


                </Modal>
            </div>

        );
    }
    private handleSubmit(e: FormEvent) {
        e.preventDefault();

        this.props.form &&
            this.props.form.validateFields((err: any, values: { isUser: string; }) => {
                if (!err) {

                    Modal.success({
                        content: 'User created successfully.',
                    });
                    this.props.addUserDetail(values);
                    this.props.close();
                }
            });
    }
}

const addUserForms = Form.create<AddUserFromProps>()(AddUsersForm);

export default addUserForms
