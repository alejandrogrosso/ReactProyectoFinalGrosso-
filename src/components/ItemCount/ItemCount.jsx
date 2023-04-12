import {useState} from "react";
import {Button} from "react-bootstrap";
import {AiOutlinePlus} from "react-icons/ai";
import {GrFormSubtract, GrPowerReset} from "react-icons/gr";

export const ItemCount = ()=>{
    const [counter, setCounter] = useState(0);
    const addUp = ()=>{
        setCounter(counter +1)
    }
    const subtract = ()=>{
        setCounter(counter > 0 ? counter - 1: counter)
    }
    const restart = ()=>{
        setCounter(0)
    }
    return (
        <>
            <Button onClick={addUp} variant = "light"><AiOutlinePlus/></Button>
        <h3>{counter}</h3>
            <Button onClick={subtract} variant = "light"><GrFormSubtract/></Button>
            <Button onClick={restart} variant = "light"><GrPowerReset/></Button>
        </>
    )


}