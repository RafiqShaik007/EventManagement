import welcome from './styles/welcome.module.css'
import {useNavigate} from 'react-router-dom'

const Welcome = ()=>{
    document.cookie = 'cond=false'
    let navigate = useNavigate()

    let a =  ()=>{
        setTimeout(async ()=>{
           navigate('/login')
        }, 5000);
    }
    a()


    return(
        <div id={welcome.wlc}>
            <h1>Welcome to our website</h1>

        </div>
    )
}
export default Welcome
