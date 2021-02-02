import React, { Component } from 'react'

import { Avatar } from 'antd'
import { user_image } from '../../../api';

export class ChatThumb extends Component {
    render() {
        const { user_picture, user_name, time } = this.props.data;
       
        return (
            <div className="chat-thumb">
                <div className="avatar">
                    <Avatar src={`${user_image}${user_picture}`} size={52} />
                </div>
                <div className="content">
                    <div className="name">{user_name}</div>
                    <div className="time">{time}</div>
                </div>
            </div>
        )
    }
}

export default ChatThumb
