import { Container } from '@mui/material';
import { useState } from 'react';
import './Login.css';
const Login = () => {
    const [newUser, setNewUser] = useState(false);
    return (
        <div>
        <div className='loginHero'>
            <h1>Sign Up and Sign In</h1>
        </div>

        <Container className='singnUp'>
            <form action="">
            <h2>{newUser ? "Sign Up" : "Sign In"}</h2>
{
    newUser && <input type="text" name="name"  placeholder='Your Name'  required/>
}
<input type="email" name="email"  placeholder='Your Email'  required/>
<input type="passwors" name="password"  placeholder='Your Password'  required/>
<input type="submit" value={newUser ? "SIGN UP" : "SIGN IN"} style={{fontSize: "18px", fontWeight: "700", padding: "10px 10px", background: "green", color: "white", border: "none", cursor: "pointer", borderRadius: "1px"}} />
<div className="bottomBtn">
    <button>Login With Google</button>
    <p>{newUser ? "Already Have An Account?" : "New User?"} <strong onClick={()=> setNewUser(!newUser)}>{newUser ? "Sign In" : "Sign Up"}</strong></p>
</div>
            </form>
        </Container>
        </div>
    );
};

export default Login;