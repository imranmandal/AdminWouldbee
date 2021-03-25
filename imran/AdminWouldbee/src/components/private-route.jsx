import React, { useContext, useEffect } from 'react'; // , useState, useEffect
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { Route } from 'react-router-dom';


const PrivateRoute = (props) => {
    const { authState, dispatch } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        if (!authState.accessToken) {
            console.log('auth token not found!');
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                dispatch({
                    type: 'LOG_IN',
                    payload: accessToken
                });
            } else {
                history.push('login');
            }
        }
    })

    const renderChildren = () => (
        <Route exact={props.exact} path={props.path} component={props.component} />
    )

    if (authState.accessToken){
        // return renderChildren();
        return <Route exact={props.exact} path={props.path} component={props.component} />
    }
    else {
        // const accessToken = localStorage.getItem('accessToken');
            
        // if (accessToken) {
        //         dispatch({
        //         type: 'LOG_IN',
        //         payload: accessToken
        //         });
        //     return renderChildren();
        // }
        // history.push('login');
        return null;
    }
}

export default PrivateRoute;