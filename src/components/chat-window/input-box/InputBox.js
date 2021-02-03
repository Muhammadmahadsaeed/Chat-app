import React, { Component } from 'react'
import { Button } from 'antd';
import AttachmentIcon from '../../controls/icons/attachment-icon/AttachmentIcon'
export class InputBox extends Component {
    sendMesssage(){
        console.log("message")
    }
    render() {
        return (
            <div className="input-box">
                <div>
                    <AttachmentIcon />
                    {/* <button className="addFiles">
                        <i className="fa fa-plus"></i>
                    </button> */}
                    <div className="search-input">
                        <input
                            type="text"
                            placeholder="Type a message here"
                        //   onChange={this.onStateChange}
                        //   value={this.state.msg}
                        />
                    </div>
                    <Button type="primary" onClick={()=> this.sendMesssage()}>Send</Button>
                </div>
            </div>
        )
    }
}

export default InputBox
