import React from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './AttachmentIcon.scss';

const AttachmentIcon = () => {
    
    return (
        <Upload >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    );
}

export default AttachmentIcon;