import * as React from 'react';

import { UploadFile } from 'antd/lib/upload/interface';
import { ImageUpload } from './ImageUpload';
import { NewMushroomForm } from './NewMushroomForm';

interface Props {

}

interface State {
    confirmDirty: boolean;
    fileList: UploadFile[];
    formFields: any;
}

export class NewMushroom extends React.Component<Props, State> {
    
    public state: State = {
        confirmDirty: true,
        fileList: [],
        formFields: {
            proposedName: {
                value: ''
            },
        },
    };

    constructor(props: Props) {
        super(props);
        this.handlePostResponse = this.handlePostResponse.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileListChange = this.handleFileListChange.bind(this);
        this.handleFormFieldsChange = this.handleFormFieldsChange.bind(this);
    }

    async handlePostResponse(response: Response): Promise<void> {
        console.log(await response.json());
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log('on submit');
        const formData = new FormData();

        this.state.fileList.forEach((file) => {
            formData.append('image', file as any);
        });

        this.state.formFields
            .forEach(formField => formData.append(formField.name, formField.value));

        fetch('http://localhost:3001/mushrooms', {
            method: 'POST',
            body: formData,
        }).then(this.handlePostResponse.bind(this), console.error);

    }

    handleFileListChange(fileList: UploadFile[]): void {
        if (fileList.length === 0) { return; }

        const fileIsNotInList = this.state.fileList
            .map(file => file.uid)
            .indexOf(fileList[0].uid);

        if (fileIsNotInList) {
            this.setState((state: State) => ({
                fileList: state.fileList.concat(fileList)
            }));
        }
    }

    handleFileRemove(removedFile: UploadFile): void {
        const fileIndex = this.state.fileList
            .map(file => file.uid)
            .indexOf(removedFile.uid);

        if (fileIndex > -1) {
            this.setState((state: State) => ({
                fileList: state.fileList.filter(file => file.uid !== removedFile.uid),
            }));
        }
    }

    handleFormFieldsChange(changedFields: any): void {
        console.log(changedFields);
        this.setState(state => ({ formFields: this.state.formFields, ...changedFields }));
    }

    render() {
        const { formFields } = this.state;
        return (
            <div>
                <ImageUpload
                    onFileListChange={this.handleFileListChange}
                    onFileRemove={this.handleFileRemove}
                    fileList={this.state.fileList}
                />
                <NewMushroomForm
                    {...formFields}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleFormFieldsChange}
                />
            </div>
        );
    }
}