import * as React from "react"
import styles from './style.module.css'
export function Box(){
const[boxState, setBoxState]= React.useState(styles.box)
const Click =(e)=>{

    switch(boxState){
        case styles.box:
        setBoxState(styles.boxGreen)
        break;
        case styles.boxGreen:
        setBoxState(styles.boxRed)
        break;
        case styles.boxRed:
        setBoxState(styles.box)
        break;
        default:
        return;
    }
}

    return(<div onClick={Click} className={boxState}></div>)
}