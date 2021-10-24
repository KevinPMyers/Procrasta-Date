import { React, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

function LoginForm() {

    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });

        console.log(formState)
    };

    // submit form
    const handleFormSubmit = async event => {

        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            username: '',
            password: ''
        });
    };


    return (

        <Form
            name="basic"
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 6 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                value={formState.username}
                onChange={handleChange}
            >
                <Input name="username" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                value={formState.password} onChange={handleChange}
            >
                <Input.Password name="password" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" onSubmit={handleFormSubmit}>
                    Submit
                </Button>
            </Form.Item>
        </Form>


    );

}

export default LoginForm;