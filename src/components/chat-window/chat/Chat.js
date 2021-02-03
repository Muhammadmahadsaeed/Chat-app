import React, { Component } from 'react'
import axios from 'axios'
export class Chat extends Component {
    componentDidMount(){
        const data = this.props.data ? this.props.data : {};
       
        let user = JSON.parse(localStorage.getItem('user'))

        axios.post(`http://192.168.0.96:401/bwccrm/fetchMessage`, { user_id: user.data.user_id, from_id: user.data.user_id,to_id:3 })
            .then(res => {
                console.log(res.data)
                // this.setState({ data: res.data.contacts })
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    render() {
        const data = this.props.data ? this.props.data : {};
        console.log("chat body====",data)
        
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
