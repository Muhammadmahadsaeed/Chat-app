import React, { Component } from "react";

import UserWindowHeader from "./user-window-header/UserWindowHeader";
import "./../../assets/scss/components/UsersWindow.scss";
import SearchBar from "./search-bar/SearchBar";
import ChatThumb from "./chat-thumb/ChatThumb";

import { connect } from "react-redux";
import { Actions } from "./../../store/actions";
import axios from "axios";
import Scrollbars from "react-custom-scrollbars";
import SearchModal from "./search-modal/modal";
import { Menu, Dropdown, Button, message, Space, Tooltip, Avatar } from "antd";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import CreateGroupModal from "./create-group-modal/CreateGroupModal";
class UsersWindow extends Component {

  constructor(props) {
   
    super(props);
    this.showGroupModal = React.createRef()
    this.state = {
      data: [],
      showModal: false
      
    };
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      this.props.history.push('/login')
    }
    else {
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
  showChat(id) {

    this.props.history.push(`/chat/${id}`);
  }

  onSearchPress = (active) => {
    this.setState({ showModal: active })
  }
  showCreateGroupModal() {
    console.log("press")
    this.showGroupModal.showModal()
  }
 

  render() {
    const { data } = this.state;
    return (
      <div className="user-window-wraper">
        <div className="user-window">
          <UserWindowHeader />

          {this.state.showModal ? <SearchModal onSearchPress={this.onSearchPress} history={this.props.history} /> :
            <>
              <SearchBar onSearchPress={this.onSearchPress} />
              <div className="new-recent-chat">
                <div className="recent-chats-heading">
                  <p>RECENT CHATS</p>
                </div>
                <div style={{ paddingRight: 10 }}>

                  <Button style={{ borderRadius: 100 }} onClick={()=> this.showCreateGroupModal()}>
                    <PlusOutlined /> New Group Chat
                    </Button>

                </div>
              </div>

              <div className="recent-chats">
                <Scrollbars autoHide>
                  {data.map((e, i) => {
                    return (
                      <div onClick={() => this.showChat(e.user_id)} key={i}>
                        <ChatThumb data={e} />
                      </div>
                    );
                  })}
                </Scrollbars>
              </div>
              <CreateGroupModal ref={(target) => (this.showGroupModal = target)}  />
            </>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserChat: state.Main.currentUserChat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showChat: (e) => dispatch(Actions.showChat(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersWindow);
