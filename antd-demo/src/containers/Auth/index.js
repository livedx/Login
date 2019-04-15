import React, {Component} from 'react';
import  ItemResume from '../../components/ItemResume'
import ItemSkills from '../../components/itemSkills'
import ItemImage from '../../components/ItemImage'
import foto from '../../static/img/10.jpg'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Checkin from "../Checkin";



class Auth extends Component {
    render() {
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
            </Form>
        );
    }
}

export default Auth;