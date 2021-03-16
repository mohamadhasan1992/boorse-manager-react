import React,{useState} from 'react';
import axios from 'axios';


const rootURL = "http://127.0.0.2:8000/api/v1/user";

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState('');
    const [isAutenticated , setIsAutenticated] = useState(true);
    const [user,setUser]= useState({username:"username",email:"email",photo:"photo"});
    const [loading, setloading] = useState(false);
    const logOutUser = async() => {
      setloading(true);
      const response = await axios.post(`${rootURL}/logout`);
      console.log(response);
      setIsAutenticated(false);
    };
    const logInUser = async(data) => {
        try{
          setloading(true);
          const response = await axios.post(`${rootURL}/login`, data);
          console.log(response);
          setToken(response.data.token);
          setIsAutenticated(true);
          setloading(false);
        }catch(error){
          console.log(error.message);
          setloading(false);
        }
        
    };
    const signUpUser = async(data) => {
    try{
        setloading(true);
        const response = await axios.post(`${rootURL}/signup`,data);
        setToken(response.data.token);
        setIsAutenticated(true);
        setloading(false);
    }catch(error){
        console.log(error.message);
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