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
        // let user = localStorage.getItem('user')
        if (!user) {
          
            this.props.history.push('/login')
        }
        else{
            axios.post(`http://192.168.0.96:401/bwccrm/getContactsUser`, { user_id: user.data.user_id, loginuser_id: user.data.user_id })
            .then(res => {
                // console.log(res.data.contacts)
                this.setState({ data: res.data.contacts })
            })
            .catch((err) => {
                console.log(err.message)
            })
        }
      
    }
    showChat(id){
        this.props.history.push(`/${id}`)
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
                                    <div onClick={() => this.showChat(e.user_id)} key={i}>
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

