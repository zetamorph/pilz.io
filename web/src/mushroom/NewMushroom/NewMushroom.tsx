import * as React from 'react';

import { UploadFile } from 'antd/lib/upload/interface';
import { ImageUpload } from './ImageUpload';
import { NewMushroomForm } from './NewMushroomForm';
import { mushroomActions } from '../../redux/modules/mushroom/actions';
import { connect } from 'react-redux';
import { Button } from 'antd';

const { createMushroom } = mushroomActions;

interface Props {
    createMushroom: (data: any) => any;
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
        const formData = new FormData();

        this.state.fileList.forEach((file) => {
            formData.append('image', file as any);
        });

        for (const formField in this.state.formFields) {
            if (this.state.formFields.hasOwnProperty(formField)) {
                formData.append(formField, this.state.formFields[formField].value);
                this.props.createMushroom(formData);
            }
        }
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
        this.setState(state => ({ formFields: { ...this.state.formFields, ...changedFields }}));
        console.log(this.state);
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
                    onChange={this.handleFormFieldsChange}
                />
                <Button
                    onClick={this.handleSubmit}
                    htmlType="submit"
                >
                    Senden
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        createMushroom: data => dispatch(createMushroom.started(data)),
    };
};
export const NewMushroomWithState = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewMushroom);