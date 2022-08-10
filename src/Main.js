import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'

const Main = () => {
    const [active,setActive] = useState(null)
    const [confirm,setConfirm] = useState(null)
    const [death,setDeath] = useState(null)
    const [deltaconfirmed,setDeltaconfirmed] = useState(null)
    const [deltadeaths,setDeltaDeaths] = useState(null)
    const [time,setTime] = useState(null)
    const [recovered,setRecovered] = useState(null)
    const [deltarecovered,setDeltaRecovered] = useState(null)

    const url = "https://data.covid19india.org/data.json"
    const getCovidData = ()=>{
        
        axios.get(url)
            .then((res)=>{
                const result = res.data
                // we want only the state wise data
                console.log(result.statewise[0])
                setActive(result.statewise[0].active)
                setConfirm(result.statewise[0].confirmed)
                setDeath(result.statewise[0].deaths)
                setDeltaconfirmed(result.statewise[0].deltaconfirmed)
                setDeltaDeaths(result.statewise[0].deltadeaths)
                setTime(result.statewise[0].lastupdatedtime)
                setRecovered(result.statewise[0].recovered)
                setDeltaRecovered(result.statewise[0].deltarecovered)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    useEffect(()=>{
        getCovidData()
    },[])

  return (
    <div className="main">
        <div className="active">
            <h1 className="val">Total active cases</h1>
            <h1 className="val">{active}</h1>
        </div>
        <div className="confirmed">
            <h1 className="val">Total confirmed cases</h1>
            <h1 className="val">{confirm}</h1>
        </div>
        <div className="deaths">
            <h1 className="val">Total deaths</h1>
            <h1 className="val">{death}</h1>
        </div>
        <div className="deltaconfirmed">
            <h1 className="val">Total deltaconfirmed cases</h1>
            <h1 className="val">{deltaconfirmed}</h1>
        </div>
        <div className="deltadeaths">
            <h1 className="val">Total deltadeaths</h1>
            <h1 className="val">{deltadeaths}</h1>
        </div>
        <div className="deltarecovered">
            <h1 className="val">Total deltarecovered</h1>
            <h1 className="val">{deltarecovered}</h1>
        </div>
        <div className="recovered">
            <h1 className="val">Total recovered</h1>
            <h1 className="val">{recovered}</h1>
        </div>
        <div className="time">
            <h1 className="val">Last Updated</h1>
            <h1 className="val">{time}</h1>
        </div>
    </div>
  )
}

export default Main

// https://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@github.com/subhampatro1996/covid19_tracker.git