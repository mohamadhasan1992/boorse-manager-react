import React from 'react';
import  {BoorseContext} from '../context/context';

const Login = () => {
    const data = React.useContext(BoorseContext);
    console.log(data);
    return(
        <>
            <h4>login page</h4>
        </>
    );
};
export default Login;