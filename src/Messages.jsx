import {useState} from 'react'
import {useEffect} from 'react'
import style from './styles/messages.module.css'
import axios from 'axios'
import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Messages = ()=>{
    let [users, setUsers] = useState([1,2,3, 4, 5, 6, 7, 8, 9, 10])

    let navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:5000/employees')
        .then((res)=>{
            setUsers(res.data)
        })
        .catch(()=>{
            console.log('Some Erorrrrrrr in Messages')
        })
    },[])

    let gohim=(a)=>{
        navigate(`/home/messages/${a}`)
    }
    return(
        <div id={style.messages}>
            <section id={style.AllUsers}>
                {users.map((x)=>{
                    return(
                        <div id={style.person} onClick={()=>{gohim(x._id)}}>
                            <section>{String(x.name)[0]}</section>
                            <article><Link to={`/home/messages/${x._id}`}>{x.name}</Link></article>
                        </div>
                    )
                })}
            </section>
            <Outlet/>
        </div>
    )

}
export default Messages