import { useState , useEffect } from "react";

function useCurrencyInfo(currency){
    const [data , setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
    },[currency])
    return data 
}

export default useCurrencyInfo


// https://api.currencyapi.com/v3/latest?apikey=cur_live_dFrjZzdoaNmP0jzHqEccN6HJOvPizFowm4yW8quf&currencies=EUR%2CUSD%2CCAD&base_currency=IRR