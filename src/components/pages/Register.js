import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Input, Button } from '../../components/AuthForm';

class Register extends React.Component {
    render() {
        return (
            <Card>
                <Form>
                    <Input type="email" placeholder="email" />
                    <Input type="password" placeholder="password" />
                    <Input type="password" placeholder="password again" />
                    <Button>Register</Button>
                </Form>
                <Link to="/login">Already have an account</Link>
            </Card>
        );
    }
}

export default Register;