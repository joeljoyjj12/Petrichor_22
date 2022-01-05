import React,{useEffect} from 'react'
import Countdown from '../Countdown/Countdown.js'
import Bg from './Bg/Bg.js'
function Proshows() {
    useEffect(()=>{
        window.scroll(0,0);
    },[])
    return (
        <div>
            {/* proshows */}
            {/* <Countdown/> */}
            <Bg />
        </div>
    )
}

export default Proshows
