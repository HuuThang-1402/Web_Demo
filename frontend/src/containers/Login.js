import React from 'react';
import { Form, Input, Button} from 'antd';
import {UserOutlined,LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';
const FormItem = Form.Item;


class NormalLoginForm extends React.Component {
    handleSubmit = (values) => {
        this.props.onAuth(values.userName, values.password);
        if (this.props.token!==null){
            this.props.history.push('/home/');
        } 
    }

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        // const { getFieldDecorator } = this.props.form;
        return (
            <div>
                {errorMessage}
                {
                    this.props.loading ?

                    {/* <Spin indicator={antIcon} /> */}

                    :

                    <Form onFinish={this.handleSubmit} className="login-form">

                        <FormItem name='userName' rule={[{ required: true, message: 'Please input your username!' }]}>
                            <Input prefix={<UserOutlined></UserOutlined>} placeholder="Tên đăng nhập" />
                        </FormItem>

                        <FormItem name='password' rule={[{ required: true, message: 'Please input your Password!' }]}>
                            <Input prefix={<LockOutlined></LockOutlined>} type="password" placeholder="Mật khẩu" />
                        </FormItem>

                        <FormItem>
                        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                            Đăng nhập
                        </Button>
                        Hoặc
                        <NavLink 
                            style={{marginLeft: '5px'}} 
                            to='/signup/'> Đăng ký
                        </NavLink>
                        </FormItem>
                    </Form>
                }
            </div>
        );
    }
}

// const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);