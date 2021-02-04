import React, { Component } from 'react'
import axios from 'axios'
import { Avatar, Divider, Input, Form, Button, Menu } from 'antd';
import {
    FileOutlined,
    SendOutlined,
    PaperClipOutlined,
    SmileOutlined,
    AudioMutedOutlined,
    UserOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';
export class Chat extends Component {
    chatBodyRef = React.createRef()
    formRef = React.createRef();
    state = {
        info: {},
        msgList: [],
        currentUser: ''
    }
    componentDidMount() {
        const data = this.props.data ? this.props.data : {};
        let user = JSON.parse(localStorage.getItem('user'))


        if (!user) {
            this.props.history.push('/login')
        }
        else {
            this.setState({ user: user })
            this.getConversation(this.getUserId())
        }

    }
    getUserId() {
        const { id } = this.props.match.params
        return parseInt(parseInt(id))
    }
    getConversation = currentId =>  {
        let user = JSON.parse(localStorage.getItem('user'))
        axios.post(`http://192.168.0.96:401/bwccrm/fetchMessage`, { user_id: user.data.user_id, from_id: user.data.user_id, to_id: currentId })
            .then(res => {
                console.log("get message=======", res.data.messages)
                this.setState({ msgList: res.data.messages })
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    scrollToBottom = () => {
        this.chatBodyRef.current.scrollToBottom()
    }
    componentDidUpdate(prevProps) {
        let user = JSON.parse(localStorage.getItem('user'))
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.getConversation(this.getUserId())
        }
        this.scrollToBottom()
    }
    onSend = values => {
        let user = JSON.parse(localStorage.getItem('user'))
        const { id } = this.props.match.params
        const message_to_id = parseInt(parseInt(id))
        if (values.newMsg) {
            axios.post(`http://192.168.0.96:401/bwccrm/sendMessage`, { user_id: user.data.user_id, loginuser_id: user.data.user_id, message_to: message_to_id, message_body: values.newMsg })
                .then(res => {
                    console.log("message sent")
                })
                .catch((err) => {
                    console.log(err.message)
                })

            this.formRef.current.setFieldsValue({
                newMsg: ''
            });
            // 	this.setState({
            // 		msgList: [...this.state.msgList, newMsgData]
            // 	})
        }
    };
    emptyClick = (e) => {
        e.preventDefault();
    };

    chatContentBody = () => (
        <div className="chat-content-body">
            <Scrollbars ref={this.chatBodyRef} autoHide>




                {this.state.msgList.map((elm, i) => {

                    return (
                        <>
                            {elm.message_from != this.state.user.data.user_id ?
                                <div className="message-wrapper" key={i}>
                                    <div className="message">
                                        {elm.message_body}
                                    </div>
                                </div>
                                :
                                <div className="message-wrapper" key={i}>
                                    <div className="message  sent">
                                        {elm.message_body}
                                    </div>
                                </div>
                            }
                        </>
                    )
                })}

            </Scrollbars>
        </div>

    )
    chatContentFooter = () => (
        <div className="input-box">
            <Form name="msgInput" ref={this.formRef} onFinish={this.onSend} className="w-100">
                <Form.Item name="newMsg" className="mb-0">
                    <Input style={{ height: "3rem" }}
                        autoComplete="off"
                        placeholder="Type a message..."
                        suffix={
                            <div>
                                <a href="/#" className="text-dark font-size-lg mr-3" onClick={this.emptyClick}>
                                    <SmileOutlined />
                                </a>
                                <a href="/#" className="text-dark font-size-lg mr-3" onClick={this.emptyClick}>
                                    <PaperClipOutlined />
                                </a>
                                <Button shape="circle" type="primary" size="default" htmlType="submit">
                                    <SendOutlined />
                                </Button>
                            </div>
                        }
                    />
                </Form.Item>
            </Form>
        </div>

    )
    render() {

        return (
            <div className="chat-content">
                {/* {this.chatContentHeader(info.name)} */}
                {this.chatContentBody()}
                {this.chatContentFooter()}
            </div>
        )
    }
}

export default Chat
