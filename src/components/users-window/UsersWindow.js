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
            // data: []
            data: [
                {
                    id: 1,
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'Kiran khan',
                    time: '2 AM'
                },
                {
                    id: 2,
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'Lol',
                    time: '2 AM'
                },
                {
                    id: 3,
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'CI CD',
                    time: '2 AM'
                },
                {
                    id: 4,
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'Iqra Muneer',
                    time: '2 AM'
                },
                {
                    id: 5,
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'Bhai Log',
                    time: '2 AM'
                },
                {
                    id: 6,
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'Yasir Hussain',
                    time: '2 AM'
                },
                {
                    id: 7,
                    avatar: 'https://picsum.photos/200/300?random=1',
                    name: 'Yasir Hussain',
                    time: '2 AM'
                },

            ]
        }
    }
    // componentDidMount() {
    //     let user = JSON.parse(localStorage.getItem('user'))

    //     axios.post(`http://192.168.0.96:401/bwccrm/getContactsTotal`, { user_id: user.data.user_id, campaign_id: 1 })
    //         .then(res => {
    //             // console.log(res.data.contacts)
    //             this.setState({ data: res.data.contacts })
    //         })
    //         .catch((err) => {
    //             console.log(err.message)
    //         })
    // }
    showChat(id){
       
        console.log("show chat===",this.props)
        this.props.history.push(`/chat/${id}`)
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
                                    <div onClick={() => this.showChat(e.id)} key={i}>
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

