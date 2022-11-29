import { useNavigate } from 'react-router-dom';
import UserPool from '../UserPool';
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

function Dashboard() {

    let navigate = useNavigate();

    const logoutUser = () => {
        var userData = {
            Username: JSON.parse(localStorage.getItem('user')),
            Pool: UserPool,
        };
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.signOut();
        navigate('/login')
    }

    return (
        <div>
            <h1>Welcome to Dashboard!!!</h1><br></br><br></br>
            <button onClick={() => logoutUser()} >Signout</button>
        </div>
    );
}

export default Dashboard;