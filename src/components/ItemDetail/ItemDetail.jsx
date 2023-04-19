import {Button, Card, Col, Row} from "react-bootstrap";
import {ItemCount} from "../ItemCount/ItemCount";


export const ItemDetail = ({id, description, price, image}) => {
    return (
        <Row xs={1} lg={3} className="g-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={image}/>
                    <Card.Body className="text-center">
                        <Card.Title>{id}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            {price}
                        </Card.Text>
                        <ItemCount/>
                        <Button variant="outline-success">Comprar</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}