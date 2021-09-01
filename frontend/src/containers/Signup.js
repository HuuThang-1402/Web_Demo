import React from 'react';
import { Form, Input, Button } from 'antd';
import {UserOutlined,LockOutlined,MailOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (values) => {
    // values.preventDefault();
    // this.props.form.validateFieldsAndScroll((err, values) => {
    //   if (!err) {
        this.props.onAuth(
            values.userName,
            values.email,
            values.password,
            values.confirm
        );
        if (this.props.token!==null){
          this.props.history.push('/home/');
        } 
      }
//     });
//   }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }


  render() {
    // const { getFieldDecorator } = this.props.form;

    return (
      <Form onFinish={this.handleSubmit}>
        
        <FormItem name="userName" rule={[{ required: true, message: 'Please input your username!' }]}>
                <Input prefix={<UserOutlined></UserOutlined>} placeholder="Tên đăng nhập" />
        </FormItem>
        
        <FormItem name="email" rule={[{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }]}>
            <Input prefix={<MailOutlined></MailOutlined>} placeholder="Email (Không bắt buộc)" />
        </FormItem>

        <FormItem name="password" rule={[{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }]}>
            <Input prefix={<LockOutlined></LockOutlined>} type="password" placeholder="Mật khẩu (Yêu cầu có 8 ký tự trở lên và phải có chữ và số)" />
        </FormItem>

        <FormItem name="confirm" rule={[{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }]}>
            <Input prefix={<LockOutlined></LockOutlined>} type="password" placeholder="Xác nhận mật khẩu" onBlur={this.handleConfirmBlur} />
        </FormItem>

        <FormItem>
        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
            Đăng ký
        </Button>
        Hoặc
        <NavLink 
            style={{marginLeft: '5px'}} 
            to='/login/'> Đăng nhập
        </NavLink>
        </FormItem>

      </Form>
    );
  }
}

// const WrappedRegistrationForm = Form.create()(RegistrationForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);