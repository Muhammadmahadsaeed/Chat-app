import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './AttachmentIcon.scss';

const AttachmentIcon = () => {

    return (
        <Upload >
            <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
    );
}

export default AttachmentIcon;