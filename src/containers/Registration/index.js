import React, {Component} from 'react';
import {Form, Icon, Input, Button,} from 'antd';

const FormItem=Form.Item;



class Registration extends Component {
    render() {
        return (
            <div>
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password1" />
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password2" />
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Register
                    </Button>
                </FormItem>
            </div>
        );

    }
}

export default Registration;

/*<Form {...formItemLayout} onSubmit={this.handleSubmit}>
    <Form.Item
        label="E-mail"
    >
        {getFieldDecorator('email', {
            rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
            }, {
                required: true, message: 'Please input your E-mail!',
            }],
        })(
            <Input />
        )}
    </Form.Item>
    <Form.Item
        label="Password"
    >
        {getFieldDecorator('password', {
            rules: [{
                required: true, message: 'Please input your password!',
            }, {
                validator: this.validateToNextPassword,
            }],
        })(
            <Input type="password" />
        )}
    </Form.Item>
    <Form.Item
        label="Confirm Password"
    >
        {getFieldDecorator('confirm', {
            rules: [{
                required: true, message: 'Please confirm your password!',
            }, {
                validator: this.compareToFirstPassword,
            }],
        })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
        )}
    </Form.Item>
    <Form.Item
        label={(
            <span>
              Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
        )}
    >
        {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
        })(
            <Input />
        )}
    </Form.Item>

    <Form.Item {...tailFormItemLayout}>
        {getFieldDecorator('agreement', {
            valuePropName: 'checked',
        })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
        )}
    </Form.Item>
    <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">Register</Button>
    </Form.Item>
</Form>*/
