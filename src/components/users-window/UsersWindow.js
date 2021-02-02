import React, { Component } from 'react'

import UserWindowHeader from './user-window-header/UserWindowHeader'
import './../../assets/scss/components/UsersWindow.scss'
import SearchBar from './search-bar/SearchBar'
import ChatThumb from './chat-thumb/ChatThumb'

import { connect } from "react-redux"
import { Actions } from './../../store/actions'
import axios from 'axios'
class UsersWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))

        axios.post(`http://192.168.0.96:401/bwccrm/getContactsTotal`, { user_id: user.data.user_id, campaign_id: 1 })
            .then(res => {
                console.log(res.data.contacts)
                this.setState({ data: res.data.contacts })
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    render() {
        const { data } = this.state;
        return (
            <div className="user-window-wraper">
                <div className="user-window">
                    <UserWindowHeader />
                    <SearchBar />
                    <div className="recent-chats">
                        {
                            data.map((e, i) => {
                                return (
                                    <div onClick={() => this.props.showChat(e)} key={i}>
                                        <ChatThumb data={e} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
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
        showChat: (e) => dispatch(Actions.showChat(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersWindow);

