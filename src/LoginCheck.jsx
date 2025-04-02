import Login from './Login'
import {Navigate} from 'react-router-dom'

const LoginCheck = ()=>{

    // document.cookie = 'cond=false'

    let a = document.cookie
    if(a.includes(';')){
        a = a.split(';')
    a = a[a.length - 1]
    a = a === ' cond=false'
    }
    else if(a === 'cond=false'){
        a = a === 'cond=false'
    }
    else{
        a = false
    }

    let check = {'token': a}
    return(
        check.token? <Login/> : <Navigate to='/home'  />
    )
}
export default LoginCheck