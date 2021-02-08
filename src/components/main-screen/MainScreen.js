import React, { Component } from 'react'

import UserWindow from '../users-window/UsersWindow'
import ChatWindow from '../chat-window/ChatWindow'
import ChatContent from '../chat-window/ChatContent'
import Nav from '../nav/Nav'
export class MainScreen extends Component {
    constructor(props) {
        super(props)
        // let user = localStorage.getItem('user')
        // if (!user) {
        //     this.props.history.push('/login')
        // }

    }
    render() {
        return (
            <div className="main-wrapper">
                <Nav />
                <div className="main__chatbody">
                    <UserWindow {...this.props}/>
                    {/* <ChatWindow {...this.props} /> */}
                    <ChatContent {...this.props}/>
                </div>
            </div>
        )
    }
}

export default MainScreen
