import React from 'react';
import { Layout, Menu,} from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
const { Header, Content, } = Layout;

class CustomLayout extends React.Component {
    handlePage = () => {
        this.props.logout();
        this.props.history.push('/');
    }
    render() {
        return (
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px',float:"right"}}
                >
                {
                    this.props.isAuthenticated ?
                    <Menu.Item key="1">
                        <Link to="/home/">Trang chủ</Link>
                    </Menu.Item>
                    :
                    <Menu.Item key="1">
                        <Link to="/">Trang chủ</Link>
                    </Menu.Item>
                }
                    
                    
                {
                    this.props.isAuthenticated ?
                    <Menu.Item key="2">
                        <Link to="/cart/">Mua thuốc</Link>
                    </Menu.Item>
                    :
                    <Menu.Item key="2">
                        <Link to="/login">Đăng nhập</Link>
                    </Menu.Item>

                }
                {
                    this.props.isAuthenticated?
                    <Menu.Item key="3" onClick={this.handlePage}>
                        Đăng xuất
                    </Menu.Item>
                    :
                    <Menu.Item key="3">
                        <Link to="/signup">Đăng ký</Link>
                    </Menu.Item>
                    
                }
    
                    
                    
                </Menu>
                </Header>
                
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {this.props.children}
                    </div>
                </Content>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));