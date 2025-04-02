import {useState} from 'react'
import {useEffect} from 'react'
import style from './styles/quotes.module.css'
import axios from 'axios'

const Quotes = ()=>{
    let [quote, setQuote] = useState()

    useEffect(()=>{
        axios.get('https://www.boredapi.com/api/activity')
        .then((res)=>{
            console.log(res.data)
            setQuote(res.data.activity)
        })
        .catch(()=>{
            console.log('Some Error in Getting Quotes')
        })
    },[])
    return(
        <div id={style.quotes}>
            <h1>{quote}</h1>
        </div>
    )
}
export default Quotes