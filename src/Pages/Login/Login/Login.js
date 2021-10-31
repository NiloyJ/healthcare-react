import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation, useParams } from 'react-router';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const { serviceId } = useParams()
    const location = useLocation()
    const history = useHistory();

    const redirect_uri = location.state?.form || '/services';
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }
    return (
        <div>
            <form>
                <a onClick={handleGoogleLogin} class="btn btn-danger btn-lg btn-block" style={{ width: '70%', backgroundColor: 'red' }} href="#!" role="button">
                    <i class="fab fa-twitter me-2"></i>Login with Google</a>
            </form>
        </div>
    );
};

export default Login;