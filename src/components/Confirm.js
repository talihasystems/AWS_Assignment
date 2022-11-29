import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserPool from '../UserPool';
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

function Confirm() {
    const [verificationCode, setVerificationCode] = useState('');

    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const congnitoUserStorage = JSON.parse(localStorage.getItem('user'));
        console.log('cong', congnitoUserStorage, UserPool)
        
        var userData = {
            Username: congnitoUserStorage,
            Pool: UserPool,
        };

        var congnitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        congnitoUser.confirmRegistration(verificationCode, true, function (err) {
            if (err) {
                console.log(err.message);
            } else {
                alert('Successfully verified code!');
                navigate('/login');
            }
        });
    };

    return (
        <div>
            <h1>Verify your code below to continue:</h1>
            <form onSubmit={onSubmit}>
                Verification Code:
                <input
                    type="text"
                    value={verificationCode.toLowerCase().trim()}
                    onChange={(e) => setVerificationCode(e.target.value)}
                />
                <br />
                <button type="submit">Verify</button>
            </form>
        </div>
    );
}

export default Confirm;