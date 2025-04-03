import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import "./styles/registerEvent.css"

const Register = ()=>{

    let [name, setName] = useState('')
    let [phonenumber, setPhonenumber] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword ] = useState('')
    let [role, setRole ] = useState('')

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
        console.log({name, email, password, phonenumber, role })
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
        // <div id="register">
        //     <form action="">
        //         <div className="head">
        //             REGISTRATION FORM
        //         </div>
        //         <div className="body">
                    
        //         <div className="inp">
        //             <label >Name</label>
        //             <input type="text" value={name} onChange={nameData} />
        //         </div>
               
        //         <div className="inp">
        //             <label >Email</label>
        //             <input type="text"  value={email} onChange={emailData} />
        //         </div>
        //         <div className="inp">
        //             <label >Phone Number</label>
        //             <input type="text" value={phonenumber} onChange={phonenumberData} />
        //         </div>
        //         <div className="inp">
        //             <label >Password</label>
        //             <input type="text" value={password} onChange={passwordData} />
        //         </div>
        //         <div className="inp">
        //             <label >Role</label>
        //             <input type="text" value={role} onChange={roleData} />
        //         </div>
        //         <div className="inp">
        //             <Link to='/login'>Already a User ?</Link>
        //         </div>
        //         <div className="inp">
        //         <button onClick={print}>REGISTER</button>
        //         </div>
        //         </div>
        //     </form>
        // </div>
        <div id="register">

        
        <div  className="form-container">
  <form className="glass-form" onSubmit={print}>
    <div className="form-header">
      <h1>Event Management Registration</h1>
      <div className="animated-border"></div>
    </div>

    <div className="form-body">
      <div className="input-group">
        <input 
          type="text" 
          value={name} 
          onChange={nameData}
          required
        />
        <label className="input-label">Name</label>
        <span className="input-highlight"></span>
      </div>

      <div className="input-group">
        <input 
          type="email" 
          value={email} 
          onChange={emailData}
          required
        />
        <label className="input-label">Email</label>
        <span className="input-highlight"></span>
      </div>

      <div className="input-group">
        <input 
          type="tel" 
          value={phonenumber} 
          onChange={phonenumberData}
          required
        />
        <label className="input-label">Phone Number</label>
        <span className="input-highlight"></span>
      </div>

      <div className="input-group">
        <input 
          type="password" 
          value={password} 
          onChange={passwordData}
          required
        />
        <label className="input-label">Password</label>
        <span className="input-highlight"></span>
      </div>

      <div className="input-group">
        <select 
          value={role} 
          onChange={roleData}
          className="role-select"
          required
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <div className="select-arrow"></div>
      </div>

      <button className="register-btn" >
        Register Now
        <span className="hover-effect"></span>
      </button>

      <p className="login-link">
        Already a user? <Link to="/login">Login here</Link>
      </p>
    </div>
  </form>
</div>
</div>
    )
}
export default Register