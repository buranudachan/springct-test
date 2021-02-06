import React from "react";
import { Table, Card, Row, Col, Button } from "antd";
import { ApplicationState } from "../../app-ducks/types";
import { omit } from "lodash";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { UserComponentProps } from "./ducks/types";
import { UserActions } from "./ducks/userActions";
import userSelectors from "./ducks/userSelectors";
import AddUsersForm from "./components/addUserFrom"
const columns = [
    {
        title: 'First Name',
        dataIndex: 'first_name',
        key: '1',
    },
    {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: '2',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',
        key: '3',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: '4',
    }
];
class UserDetial extends React.Component<UserComponentProps, any> {
    usersdata: any;
    constructor(props: UserComponentProps) {
        super(props);
        this.state = {
            userDetail: [],
            isAddUser: false
        }
    }
    addUser() {
        this.setState({ isAddUser: true })
    }
    closeAddUserForm() {
        this.setState({ isAddUser: false })
    }
    addUserDetail(data: any) {
        var userDetail = this.state.userDetail;
        userDetail.push(data)
        this.setState({
            userDetail: userDetail
        })
    }
    public render() {
        const usersdata: any = localStorage.getItem("userData");
        const userDataParse = JSON.parse(usersdata);
        return (
            <React.Fragment>
                <Row>
                    <Col span={24}>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col span={21}>
                    </Col>
                    <Col span={3}>
                        {userDataParse.isUser === "Admin" ? <Button onClick={() => this.addUser()} style={{
                            backgroundColor: "#0000FF",
                        }}>Add User</Button> : ""}
                    </Col>
                </Row>
                <Card>
                    <Table dataSource={this.state.userDetail} columns={columns} />;
                </Card>
                { this.state.isAddUser ? <AddUsersForm addUserDetail={(data: any) => this.addUserDetail(data)} close={() => this.closeAddUserForm()} /> : ""}
            </React.Fragment >
        );
    }
}
const mapStateToProps = (state: ApplicationState) => {
    return {
        ...userSelectors.getUserData(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            ...bindActionCreators(omit(UserActions, ["Type"]) as any, dispatch),
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetial);
