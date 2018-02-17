import * as React from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import UploadList, { UploadProps, UploadListProps } from 'antd/lib/upload';
import { UploadFile, UploadLocale } from 'antd/lib/upload/interface';
import { ChangeEvent, FormEvent } from 'react';
import FormItem from 'antd/lib/form/FormItem';

import { config } from '../config';

interface PropTypes {

}

const uploadProps: UploadProps = {
    action: `${config.apiUrl}/mushrooms`,
    name: 'images',
    beforeUpload(file: UploadFile, fileList: UploadFile[]): Promise<void> | boolean {
        return false;
    }
};

const uploadLocale: UploadLocale = {
    
};

// @ts-ignore
const uploadListProps: UploadListProps = {
    listType: 'picture-card',
    locale: uploadLocale,
};

export class NewMushroom extends React.Component<PropTypes, any> {
    
    public state = {
        fileList: [],
        proposedName: '',
    };

    constructor(props: PropTypes) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleProposedNameChange = this.handleProposedNameChange.bind(this);   
    }

    handleChange({ fileList }: { fileList: UploadFile[] }): void {
        this.setState((state: any) => ({ fileList: state.fileList.concat(fileList) }));
    }

    async handlePostResponse(response: Response) {
        console.log(await response.json());
    }

    handlePreview(file: UploadFile): void {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        }); 
    }

    handleSubmit(event: FormEvent<HTMLFormElement>): void {
        const formData = new FormData();
        this.state.fileList.forEach((file: File) => {
            formData.append('image', file);
        });
        formData.append('proposedName', this.state.proposedName);
        fetch('http://localhost:3001/mushrooms', {
            method: 'POST',
            body: formData,
        }).then(this.handlePostResponse.bind(this), console.error);
        event.preventDefault();
    }

    handleProposedNameChange(event: ChangeEvent<HTMLInputElement>): void {
        this.setState({ proposedName: event.target.value });
    }

    render() {
        const { fileList } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <UploadList
                    {...uploadProps}
                    {...uploadListProps}
                    fileList={fileList}
                    onChange={this.handleChange}
                    onPreview={this.handlePreview}
                >
                    <Icon type="upload"/>
                </UploadList>
                <FormItem>
                    <Input value={this.state.proposedName} onChange={this.handleProposedNameChange}/>
                </FormItem>
                <Button htmlType="submit">Senden</Button>
            </Form>
        );
    }
}