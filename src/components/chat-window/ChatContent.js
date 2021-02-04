import React from "react";
import { Route, Switch, Router, BrowserRouter } from "react-router-dom";
import Chat from "./chat/Chat";
import { ChatWindow } from "./ChatWindow";

const ConversationEmpty = () => (
  <div className="chat-content-empty">
    {/* <div className="text-center">
      <img src="/img/others/img-11.png" alt="Start a Conversation" /> */}
    <h1 className="font-weight-light">Start a conversation</h1>
    {/* </div> */}
  </div>
);

class ChatContent extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ChatWindow} />
        <Route exact path="/:id" component={ConversationEmpty} />
      </Switch>
    );
  }
}

export default ChatContent;
