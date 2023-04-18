import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Item = ({id, description, price, image})=>{
    return(
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body className="text-center">
                    <Card.Title >{id}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Link to={`/detail/${id}`}>
                    <Button variant="outline-success">Ver más...</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}