import React,{useState} from 'react';
import axios from 'axios';


const rootURL = "http://127.0.0.2:8000/api/v1/user";

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [isAutenticated , setIsAutenticated] = useState(true);
    const [user,setUser]= useState({username:"username",email:"email",photo:"photo"});
    const [loading, setloading] = useState(false);
    const logOutUser = () => {
        setIsAutenticated(false);
    };
    const logInUser = async(data) => {
        try{
            setloading(true);
            const response = await axios.post(`${rootURL}/login`, data);
            console.log(response.data.token);
            setloading(false);
        }catch(err){
            console.log(err);
            setloading(false);
        }
    };
    const signUpUser = async(data) => {
    try{
        setloading(true);
        
        const response = await axios.post(`${rootURL}/signup`,data);
        console.log(response.data.token);
        setloading(false);
    }catch(err){
        console.log(err);
        setloading(false);

    }
    };

    return (
      <AuthContext.Provider
        value={{
          isAutenticated,
          user,
          loading,
          logInUser,
          signUpUser,
          logOutUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };