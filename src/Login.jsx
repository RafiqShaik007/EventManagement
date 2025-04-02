import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Login = ()=>{
    

    let [email, setEmail] = useState()
    let [password, setPassword] = useState()

    let navigate = useNavigate()

    let emailData = (a)=>{
        setEmail(a.target.value)
    }
    let passwordData = (b)=>{
        setPassword(b.target.value)
    }

    let print =(e)=>{
        e.preventDefault()
        // console.log(name, password)
        axios.post('http://localhost:8080/api/user/login', {email, password})
        .then((res)=>{
            console.log(res)
            alert(res.data.message)
            if(res.data.status === true){
                document.cookie = 'cond=true'
                navigate('/home')
            }
            else if(res.data.status === false){
                navigate('/register')
            }
        })
        .catch(()=>{
            console.log('Error in Logining the Data')
        })
    }

    return(
        <div id="login">
            <form action="">
                <h1>LOGIN</h1>
                <input type="text" placeholder="Email"  value={email} onChange={emailData} />
                <input type="text" placeholder="Password" value={password} onChange={passwordData} />
                <button onClick={print}>LOGIN</button>
                <div>Not Registered? <Link to="/register">Create an Account</Link></div>
            </form>
        </div>
    )
}
export default Login