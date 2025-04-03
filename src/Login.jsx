import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/loginEvent.css"

const Login = () => {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  let navigate = useNavigate();

  let emailData = (a) => {
    setEmail(a.target.value);
  };
  let passwordData = (b) => {
    setPassword(b.target.value);
  };

  let print = (e) => {
    e.preventDefault();
    // console.log(name, password)
    axios
      .post("http://localhost:8080/api/user/login", { email, password })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        if (res.data.status === true) {
          localStorage.setItem('Login_user', res.data.data.email)
          localStorage.setItem('Login_user_name', res.data.data.name)
          localStorage.setItem('Login_role', res.data.data.role)
          navigate("/home");
        } else if (res.data.status === false) {
          navigate("/register");
        }
      })
      .catch(() => {
        console.log("Error in Logining the Data");
      });
  };

  return (
    <div id="event-login">
      {/* <form action="">
                <h1>LOGIN</h1>
                <input type="text" placeholder="Email"  value={email} onChange={emailData} />
                <input type="text" placeholder="Password" value={password} onChange={passwordData} />
                <button onClick={print}>LOGIN</button>
                <div>Not Registered? <Link to="/register">Create an Account</Link></div>
            </form> */}

      <div className="container">
        <div className="form-box">
          <h2>Login</h2>
          <form>
            <div className="input-box">
              <input type="email" required  value={email} onChange={emailData} />
              <label>
                Email <i className="fas fa-envelope"></i>
              </label>
            </div>
            <div className="input-box">
              <input type="password" required value={password} onChange={passwordData} />
              <label>
                Password <i className="fas fa-lock"></i>
              </label>
            </div>
            <button type="submit" className="btn" onClick={print}>
              Login
            </button>
            <div className="register">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
