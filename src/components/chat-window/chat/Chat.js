import React, { Component } from 'react'

export class Chat extends Component {
    render() {
        const data = this.props.data ? this.props.data : {};
        console.log("chat header====",data)
        
        return (
            <div>
                <div className="message-wrapper">
                    <div className="message">
                        heloo have a nice day, you fucking scum
                    </div>
                </div>
                <div className="message-wrapper">
                    <div className="message">
                        heloo have a nice day, you fucking scum
                    </div>
                </div>
                <div className="message-wrapper">
                    <div className="message  sent">
                        heloo have a nice day, you fucking scum
                    </div>
                </div>
                <div className="message-wrapper">
                    <div className="message  sent">
                        heloo have a nice day, you fucking scum
                    </div>
                </div><div className="message-wrapper">
                    <div className="message  sent">
                        heloo have a nice day, you fucking scum
                    </div>
                </div><div className="message-wrapper">
                    <div className="message  sent">
                        heloo have a nice day, you fucking scum
                    </div>
                </div><div className="message-wrapper">
                    <div className="message  sent">
                        heloo have a nice day, you fucking scum
                    </div>
                </div><div className="message-wrapper">
                    <div className="message  sent">
                        heloo have a nice day, you fucking scum
                    </div>
                </div><div className="message-wrapper">
                    <div className="message  sent">
                        heloo have a nice day, you fucking scum
                    </div>
                </div><div className="message-wrapper">
                    <div className="message">
                        heloo have a nice day, you fucking scum
                    </div>
                </div><div className="message-wrapper">
                    <div className="message">
                        heloo have a nice day, you fucking scum
                    </div>
                </div><div className="message-wrapper">
                    <div className="message">
                        heloo have a nice day, you fucking scum
                    </div>
                </div><div className="message-wrapper">
                    <div className="message">
                        heloo have a nice day, you fucking scum
                    </div>
                </div><div className="message-wrapper">
                    <div className="message  sent">
                        heloo have a nice day, you fucking scum
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat
