import * as React from 'react';
import Icon from 'antd/lib/icon';
import UploadList, { UploadProps, UploadListProps } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';

import { config } from '../../config';
import Modal from 'antd/lib/modal/Modal';

interface Props {
    fileList: UploadFile[];
    onFileListChange: (fileList: UploadFile[]) => void;
    onFileRemove: (removedFile: UploadFile) => void;
}

interface State {
    previewVisible: boolean;
    previewImageUrl: string;
}

const uploadProps: UploadProps = {
    accept: 'image/*',
    action: `${config.apiUrl}/mushrooms`,
    name: 'images',
    beforeUpload(file: UploadFile, fileList: UploadFile[]): Promise<void> | boolean {
        return false;
    }
};

const uploadListProps: UploadListProps = {
    listType: 'picture-card',
    locale: {},
};

const createImagePreview = (file: File) => {
    const reader = new FileReader();
    return new Promise<any>((resolve) => {
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
    });
};

export class ImageUpload extends React.Component<Props, State> {
    
    public state: State = {
        previewVisible: false,
        previewImageUrl: '',
    };

    constructor(props: Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handlePreviewCancel = this.handlePreviewCancel.bind(this);
    }

    async handleChange({ fileList }: { fileList: UploadFile[] }): Promise<void> {
        if (fileList.length === 0) { return; }
        fileList[0].thumbUrl = await createImagePreview(fileList[0] as any);
        return this.props.onFileListChange(fileList);
    }

    handlePreview(file: UploadFile): void {
        if (file.thumbUrl) {
            this.setState(state => ({
                previewVisible: true,
                previewImageUrl: file.thumbUrl!,
            }));
        }
    }

    handlePreviewCancel(): void {
        this.setState(state => ({
            previewVisible: false,
        }));
    }

    render() {
        const { fileList } = this.props;
        const { previewVisible, previewImageUrl } = this.state;
        return (
            <div>
                <UploadList
                    {...uploadProps}
                    {...uploadListProps}
                    fileList={fileList}
                    onChange={this.handleChange}
                    onPreview={this.handlePreview}
                    onRemove={this.props.onFileRemove}
                >
                    <Icon type="upload"/>
                </UploadList>
                <Modal visible={previewVisible} footer={null} onCancel={this.handlePreviewCancel}>
                    <img alt="preview" style={{ width: '100%' }} src={previewImageUrl} />
                </Modal>
            </div>
        );
    }
}