import {Item} from "../Item/Item";
import {Row} from "react-bootstrap";

export const ItemList = ({products})=>{
    return(
        <Row xs={1} md={4} lg = {5}className="g-4">
            {products.map((item) =><Item{...item} key={item.id}/>)}
        </Row>

    )

}