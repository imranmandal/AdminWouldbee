import { useState, useContext, useEffect } from "react";
import { AuthContext } from '../context/auth.context';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const uri = 'https://3b0fe2a0fb02.in.ngrok.io/';

const LoginPage = (props) => {

    const [ phone, setPhone ] = useState('');
    const [password, setPassword] = useState('');
    const { authState, dispatch } = useContext(AuthContext);
    // const [success, setSuccess] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (authState.accessToken) {
            history.push('/');
        } else {
            const accessToken = localStorage.getItem('accessToken');
            
            console.log('[login.page.jsx] logging in with storage accessToken:', accessToken);

            if (accessToken) {
                dispatch({
                type: 'LOG_IN',
                payload: accessToken
            });
            }
        }
    })

    // const changeEmail()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = JSON.stringify({
            phone, password
        });

        try {
            const result = await fetch(uri, {
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                method: 'POST',
                body
            });
            const data = await result.json();
            console.log('login query response data:', data.accessToken);

            dispatch({
                type: 'LOG_IN',
                payload: data.accessToken
            });

            localStorage.setItem('accessToken', data.accessToken);

            // setSuccess(true);
            toast.success('Login Successful');

        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                    className="form-control" placeholder="Enter phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                <input type="password"      className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

            <button type="submit"
                className="btn
                btn-dark btn-lg btn-block">Log in</button>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
            </form>

            <h4>Auth State: {authState.accessToken}</h4>

        </>
        );
}

export default LoginPage;