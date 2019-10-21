import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Card, Logo, Form, Input, Button, Error } from '../../components/AuthForm';
import { useAuth } from '../../context/auth';

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    function postLogin() {
        axios.post("https://www.somePlace.com/auth/login", {
            username,
            password
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        })
    } 

    if (isLoggedIn) {
        return <Redirect to="/" />
    }
    
    return (
        <Card>
            <Form>
                <Input
                    type="username"
                    value={username}
                    onChange={e => {
                        setUsername(e.target.value);
                    }}
                    placeholder="email"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value)
                    }}
                    placeholder="password" 
                />
                <Button onClick={postLogin}>Sign In</Button>
            </Form>
            <Link to="/register">Don't have an account?</Link>
                { isError &&<Error>The username or password provided were incorrect!</Error>}
        </Card>
    );
}

export default Login;