import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import './item.css'

export const Item = ({id, name,description,category, price, image})=>{
    return(
        <Col>
            <Card >
                <Card.Img variant="top" className="img_card"  src={image} />
                <Card.Body className="text-center">
                    <Card.Title >{name}</Card.Title>
                    <Card.Text>
                       $ {price}
                    </Card.Text>
                    <Link to={`/detail/${id}`}>
                    <Button variant="outline-success">Ver más detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}