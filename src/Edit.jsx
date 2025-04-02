import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import zz from './styles/edit.module.css'
import {useNavigate} from 'react-router-dom'


const Edit = ()=>{
    let [id, setId] = useState()
    let [name, setName] = useState()
    let [email, setEmail] = useState()
    let [company, setCompany] = useState()
    let [password, setPassword] = useState()


    let {abc} = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:5000/employees/${abc}`)
        .then((res)=>{
            console.log('Successfully Got the Data in Edit Component')
            setId(res.data._id)
            setName(res.data.name)
            setEmail(res.data.email)
            setPassword(res.data.password)
            setCompany(res.data.company)
        })
        .catch(()=>{
            console.log('Some Error in Edit User')
        })
    },[abc])

    let nameData = (a)=>{
        setName(a.target.value)
    }

    let emailData = (b)=>{
        setEmail(b.target.value)
    }

    let companyData = (c)=>{
        setCompany(c.target.value)
    }

    let passwordData = (d)=>{
        setPassword(d.target.value)
    }

    let send=(e)=>{
        e.preventDefault()
        console.log(id)
        axios.put(`http://localhost:5000/employees/${abc}`,{name,email,company,password})
        .then((res)=>{
            // alert(res.data.message)
            if(res.data.stat){
                navigate('/home/friends')
            }
        })
        .catch(()=>{
            console.log('Some Error in Updating the Data')
        })
    }
    
    return(
        <div id={zz.edit}>
            <section>
            <form >
                <h2>EDIT USER</h2>
               <fieldset>
                <legend>Name</legend>
                <input type="text" value={name} onChange={nameData}/>
               </fieldset>
               <fieldset>
                <legend>Email</legend>
                <input type="text" value={email} onChange={emailData}/>
               </fieldset>
               <fieldset>
                <legend>Company</legend>
                <input type="text" value={company} onChange={companyData}/>
               </fieldset>
               <fieldset>
                <legend>Password</legend>
                <input type="text" value={password} onChange={passwordData}/>
               </fieldset>
               <button onClick={send}>UPDATE</button>
            </form>
            </section>
        </div>
    )
}
export default Edit
