import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleFacebookSignIn } = useAuth()
    return (
        <div>
            <h2 style={{ fontSize: '5rem' }}>Please Login</h2>.
            <form>
                <div class="form-group container-fluid">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" class ="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group container-fluid">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <h2 class="text text-danger">OR</h2>
                <a onClick={handleFacebookSignIn} class="btn btn-primary btn-lg btn-block" style={{width:'70%', marginBottom:'5%', backgroundColor: "#3b5998" }} href="#!" role="button">
                                    <i class="fab fa-facebook-f me-2"></i>Login With Facebook
                                </a><br />
                <a onClick={signInUsingGoogle} class="btn btn-danger btn-lg btn-block" style={{width:'70%',backgroundColor: 'red'}} href="#!" role="button">
                                    <i class="fab fa-twitter me-2"></i>Login with Google</a>
            </form>
        </div>
    );
};

export default Login;