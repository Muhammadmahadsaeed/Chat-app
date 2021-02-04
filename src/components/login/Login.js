import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';


import axios from 'axios'

class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            // console.log(this.props.history)
            
            // if (!err) {
            //     console.log('Received values of form: ', values);
            //     axios.post(`http://192.168.0.96:401/bwccrm/login`, { email: values.email, password: values.password })
            //         .then(res => {
                       
            //             localStorage.setItem('user', JSON.stringify(res.data))
                        this.props.history.push('/')
                    // })
                    // .catch((err) => {
                    //     console.log(err.message)
                    // })
            // }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="signup-form-wrapper">
                <div className="signup-form">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your Email!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Email"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
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

const WrappedLogin = Form.create({ name: 'login' })(Login);

export default WrappedLogin
