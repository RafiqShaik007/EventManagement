import style from "./home.module.css"
import {Link} from 'react-router-dom'
import { Outlet } from "react-router-dom"
import {useNavigate} from 'react-router-dom'


const Home = ()=>{
    let navigate = useNavigate()

    let logout = ()=>{
        document.cookie = 'cond=false'
        navigate('/login')

    }
    
    return(
        <div id={style.home}>
            
           <nav>
                <div><Link to='/home/'>CODIFY</Link></div>
                <div>
                    <Link to="/home/friends">FRIENDS</Link>
                    <Link to="/home/messages">MESSAGES</Link>
                    <Link to="/register" onClick={()=>{document.cookie = 'cond=false'}}>CREATE EMPLOYEE</Link>
                    
                </div>
                <div>
                    <button onClick={logout} title='Are you Sure? You want to Log out?'>LOG OUT</button>
                </div>
            </nav>
            <Outlet />
            
        </div>
    )
}
export default Home