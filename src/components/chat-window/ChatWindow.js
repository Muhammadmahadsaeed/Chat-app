import React, { Component } from 'react'
import ChatHeader from './chat-header/ChatHeader'
import Chat from './chat/Chat'

import { connect } from 'react-redux'
import InputBox from './input-box/InputBox';
import ChatContent from './ChatContent';
// import { ACtions } from './../../store/actions'

export class ChatWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { currentUserChat } = this.props;
        return (
            <div className="chat-window-wrapper">
                <div>
                    <ChatHeader data={currentUserChat} />
                </div>

                <div className="chat-wrapper">
                    <Chat {...this.props} />
                </div>

                {/* <div>
                    <InputBox {...this.props}/>
                </div> */}
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        currentUserChat: state.Main.currentUserChat
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);
