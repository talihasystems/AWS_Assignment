import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import {  useState } from 'react';
import UserPool from '../UserPool';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const attributeList = [];
        attributeList.push(
            new CognitoUserAttribute({
                Name: 'email',
                Value: email,
            })
        );
        UserPool.signUp(username, password, attributeList, null, (err, data) => {
            if (err) {
                console.log(err);
                alert("Couldn't sign up");
            } else {
                console.log(data);
                localStorage.setItem('user', JSON.stringify(data.user.getUsername()));
                alert('User Added Successfully');
                navigate('/confirm');
            }
        });
    };

    return (
        <div>
            <h1>AWS ASSIGNMENT</h1>
            <form onSubmit={onSubmit}>
                UserName:
                <input
                    type="text"
                    value={username.toLowerCase().trim()}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;