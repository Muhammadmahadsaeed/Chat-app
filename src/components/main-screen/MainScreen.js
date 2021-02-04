import React, { Component } from 'react'

import UserWindow from '../users-window/UsersWindow'
import ChatWindow from '../chat-window/ChatWindow'
import ChatContent from '../chat-window/ChatContent'
import Nav from '../nav/Nav'
export class MainScreen extends Component {
    constructor(props) {
        super(props)
<<<<<<< HEAD
        let user = localStorage.getItem('user')
        if (!user) {
            console.log("user nh h")
            this.props.history.push('/login')
        }
=======
        // let user = localStorage.getItem('user')
        // if (!user) {
        //     this.props.history.push('/login')
        // }
>>>>>>> 5dac6d23c5e2d380bc86a4c6f0c6f071e374975b

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
