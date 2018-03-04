import * as React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

export const NewMushroomForm = Form.create({
    onFieldsChange (props: any, changedFields: any): void {
        props.onChange(changedFields);
    }
})((props) => {
    const { getFieldDecorator } = props.form; 
    return (
        <Form>
            <FormItem label="Namensvorschlag">
                {getFieldDecorator('proposedName', { rules: [{ required: true }]})
                (<Input type="text"/>)}
            </FormItem>
        </Form>
    );
});