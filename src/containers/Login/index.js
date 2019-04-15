import React, {Component} from 'react';
import {Form, Icon, Input, Button,} from 'antd';

const FormItem=Form.Item;



class Login extends Component {
    render() {
        return (
            <div>
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
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

export default Login;



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
</Form>*/