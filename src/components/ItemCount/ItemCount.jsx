
import {Button} from "react-bootstrap";
import {AiOutlinePlus} from "react-icons/ai";
import {GrFormSubtract} from "react-icons/gr";
import {FaTrashAlt} from "react-icons/fa";

export const ItemCount = ({maxCount, modifyCounter, counter}) => {

    const addUp = () => {
        modifyCounter(counter < maxCount ? counter + 1: counter)
    }
    const subtract = () => {
        modifyCounter(counter > 0 ? counter - 1 : counter)
    }
    const restart = () => {
        modifyCounter(0)
    }
    return (
        <div className="d-flex ms-5">
            <Button onClick={addUp} variant="light"><AiOutlinePlus/></Button>
            <h3 className="mx-2"> {counter} </h3>
            <Button onClick={subtract} variant="light"><GrFormSubtract/></Button>
        </div>
    )


}