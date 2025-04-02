import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = ()=>{

    let [name, setName] = useState()
    let [phonenumber, setPhonenumber] = useState()
    let [email, setEmail] = useState()
    let [password, setPassword ] = useState()
    let [role, setRole ] = useState()

    let navigate = useNavigate()


    let nameData = (a)=>{
        setName(a.target.value)
    }

    let phonenumberData = (b)=>{
        setPhonenumber(b.target.value)
    }

    let emailData = (c)=>{
        setEmail(c.target.value)
    }

    let passwordData = (d)=>{
        setPassword(d.target.value)
    }

    let roleData = (d)=>{
        setRole(d.target.value)
    }

    let print = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/api/user/register', {name, email, phonenumber, password, role})
        .then((res)=>{
            console.log('Response: ', res)
            alert(res.data.message)
            if(res.data.status === true){
                navigate('/login')
            }
        })
        .catch(()=>{
            console.log('Some Error Occured in React Register')
        })
    }

    return(
        <div id="register">
            <form action="">
                <div className="head">
                    REGISTRATION FORM
                </div>
                <div className="body">
                    
                <div className="inp">
                    <label >Name</label>
                    <input type="text" value={name} onChange={nameData} />
                </div>
               
                <div className="inp">
                    <label >Email</label>
                    <input type="text"  value={email} onChange={emailData} />
                </div>
                <div className="inp">
                    <label >Phone Number</label>
                    <input type="text" value={phonenumber} onChange={phonenumberData} />
                </div>
                <div className="inp">
                    <label >Password</label>
                    <input type="text" value={password} onChange={passwordData} />
                </div>
                <div className="inp">
                    <label >Role</label>
                    <input type="text" value={role} onChange={roleData} />
                </div>
                <div className="inp">
                    <Link to='/login'>Already a User ?</Link>
                </div>
                <div className="inp">
                <button onClick={print}>REGISTER</button>
                </div>
                </div>
            </form>
        </div>
    )
}
export default Register