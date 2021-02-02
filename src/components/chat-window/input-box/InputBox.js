import React, { Component } from 'react'
import { Button } from 'antd';
import AttachmentIcon from '../../controls/icons/attachment-icon/AttachmentIcon'
export class InputBox extends Component {
    render() {
        return (
            <div className="input-box">
                <div style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'inline-block' }}>
                        <AttachmentIcon />
                    </div>
                    <div className="search-input">
                        <input type="text" placeholder="Type here" />
                    </div>
                    <div style={{ display: 'inline-block' }}>
                    <Button type="primary">Send</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputBox
