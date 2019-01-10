import React, { Component } from 'react';
import styled from 'styled-components'
import { Modal, Tabs, Form, Icon, Input, Button, Row, Col } from 'antd';
import IconType from "@utils/Icon"

const TabPane = Tabs.TabPane;

class BaseLoginForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="base-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名！' }],
                    })(
                        <Input prefix={<Icon type={IconType.I_USER} style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码！' }],
                    })(
                        <Input prefix={<Icon type={IconType.I_LOCK} style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </Form.Item>
                <a className="login-form-forgot" href="">忘记密码</a>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

class BaseRegisterForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="base-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名！' }],
                    })(
                        <Input prefix={<Icon type={IconType.I_USER} style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('phone', {
                    })(
                        <Input prefix={<Icon type={IconType.I_PHONE} style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="请输入手机号" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Row gutter={30}>
                        <Col span={15}>
                            <Input type="text" placeholder="验证码" />
                        </Col>
                        <Col span={8}>
                            <Button>获取验证码</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码！' }],
                    })(
                        <Input prefix={<Icon type={IconType.I_LOCK} style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="login-form-button">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

const LoginForm = Form.create({ name: 'login_form' })(BaseLoginForm);
const RegisterForm = Form.create({ name: 'resigter_form' })(BaseRegisterForm);

const Content = styled.div`
    .base-form{
        max-width: 70%;
        margin: auto

        .login-form-forgot{
            text-align: right;
        }

        .login-form-button{
            width: 100%;
        }
    }

    .login-form-footer{
        position: relative;
        border-top: 1px #000 solid;
        width: 80%;
        margin: auto;
        .title{
            padding: 0 20px;
            background-color:white;
            position: absolute;
            font-size: 18px;
            left: 30%;
            top: -18%;
        }
        .share{
            color: black;
            display: inline-box;
            font-size: 50px;
            margin: 0 10%;
        }
        .share:hover{
            color: #ccc;
        }
    }
`

export default class Login extends Component {

    render() {
        const tabBarStyle = {
            textAlign: 'center'
        }
        return (
            <Modal
                visible={true}
                centered
                footer={null}>
                <Content>
                    <Tabs defaultActiveKey="1"
                        size="large"
                        tabBarStyle={tabBarStyle}>
                        <TabPane tab="登录" key="1">
                            <LoginForm id="llll" />
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                    <div className="login-form-footer">
                        <div className="title">第三方登录</div>
                        <a className="share share-weixin"><Icon className="icon" type="wechat" /></a>
                        <a className="share share-weibo"><Icon className="icon" type="weibo-circle" /></a>
                        <a className="share share-qq"><Icon className="icon" type="qq" /></a>
                    </div>
                </Content>
            </Modal>
        )
    }
}

