import { useState , useEffect } from "react";

function useCurrencyInfo(currency){
    const [data , setData] = useState({})
    useEffect(()=>{
        fetch()
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data)
    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo


// https://api.currencyapi.com/v3/latest?apikey=cur_live_dFrjZzdoaNmP0jzHqEccN6HJOvPizFowm4yW8quf&currencies=EUR%2CUSD%2CCAD&base_currency=IRR