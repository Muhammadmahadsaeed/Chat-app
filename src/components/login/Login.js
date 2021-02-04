import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import {
    KeyOutlined,
    UserOutlined,

} from '@ant-design/icons';

import axios from 'axios'

class Login extends Component {

    handleSubmit = values => {
        axios.post(`http://192.168.0.96:401/bwccrm/login`, { email: values.email, password: values.password })
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data))
                this.props.history.push('/')
            })
            .catch((err) => {
                console.log(err.message)
            })


    };

    render() {

        return (
            <div className="signup-form-wrapper">
                <div className="signup-form">
                    <Form onFinish={this.handleSubmit} className="login-form" name="basic">
                        <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>


                            <Input
                                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Email"
                            />

                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>

                            <Input.Password
                                prefix={<KeyOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}

                                placeholder="Password"
                            />

                        </Form.Item>
                        <Form.Item>
                            {/* <div>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                <a className="login-form-forgot" href="">
                                    Forgot password
                    </a>
                            </div> */}
                            <div>
                                <Button block type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                            </Button>

                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}



export default Login
