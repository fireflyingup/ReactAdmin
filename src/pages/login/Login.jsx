import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.less";
import logo from "./images/logo.png";
import { reqLogin } from "../../api/Api";

export default class Login extends React.Component {
    onFinish = async (e) => {
        const { username, password } = e;
        const response = await reqLogin({ username, password });
        console.log(response);
        if (response.status === 0) {
            this.props.history.push('/admin')
        }
    };
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>React项目: 后台管理系统</h1> 
                </header>
                <section className="login_content">
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "用户名不能为空!",
                                },
                                {
                                    // required: true,
                                    min: 4,
                                    message: "用户名长度必须大于等于4!",
                                },
                                {
                                    max: 12,
                                    message: "用户名长度必须小雨等于12!",
                                },
                                {
                                    // required: true,
                                    pattern: /^[a-zA-Z0-9_]+$/,
                                    message:
                                        "用户名必须是字母、数字下划线组成!",
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <UserOutlined className="site-form-item-icon" />
                                }
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <LockOutlined className="site-form-item-icon" />
                                }
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}
