import {Navigate} from 'react-router-dom'
import Home from './Home'


const ProtectRoutes = ()=>{
    // console.log('From Protected: ', a.prop.tkn, a.prop.tok)
    let a = document.cookie
    if(a.includes(';')){
        a = a.split(';')
    a = a[a.length - 1]
    a = a === ' cond=true'
    }
    else if(a === 'cond=true'){
        a = a === 'cond=true'
    }
    else{
        a = false
    }
    let auth = {'token': a}
    // let auth = {'token': true}
    return(
        auth.token? <Home /> : <Navigate to='/login' />
    )
}


export default ProtectRoutes
