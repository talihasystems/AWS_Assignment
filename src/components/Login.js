
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserPool from '../UserPool';
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

function Login() {

  let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();


    var authenticationData = {
      Username: username,
      Password: password,
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      authenticationData
    );

    var userData = {
      Username: JSON.parse(localStorage.getItem('user')),
      Pool: UserPool,
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);


    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        console.log('Logged in!');

        let idToken = result.getIdToken()
          .getJwtToken();
        console.log(idToken);
        if(idToken){
          navigate('/dashboard')
        }
      
      },

      onFailure: function (err) {
        console.log(err.message);
      },

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
                Password:
                <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;