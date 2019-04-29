import React, {Component} from 'react';
import {Form, Icon, Input, Button,} from 'antd';
import {connect} from 'react-redux';
import  {loginAction} from "../../actions/auth";
import { withRouter } from "react-router";

const FormItem=Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}





class Home extends Component {

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();

        console.log(this.props.token);
        const { history, token } = this.props;
        if(!token || token.dateCreate + token.timeExist>Date.now()){
            history.push("/login");
        }



    }
    handleSubmit=(ev)=>{
        const {loginAction} = this.props;
        ev.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                loginAction(values);
            }
        });
        return false;
    }

    render() {
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;
        console.log(this.props.token)
        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const emailError = isFieldTouched('email') && getFieldError('email');
        const phoneError = isFieldTouched('phone') && getFieldError('phone');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                >
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item
                    label="E-mail"
                    validateStatus={emailError ? 'error' : ''}
                    help={emailError || ''}
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
                    label="Phone"
                    validateStatus={phoneError ? 'error' : ''}
                    help={phoneError || ''}
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                    >
                        Push
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
const mapStateToProps = (state) => {
    return { token: state.users.auth}
}

export default withRouter( connect(mapStateToProps, {
    loginAction
})(Form.create({ name: 'horizontal_login' })(Home)));





