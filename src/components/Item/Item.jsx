import {Card, Col} from "react-bootstrap";

export const Item = ({id, description, price, image})=>{
    return(
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Id:{id}</Card.Title>
                    <Card.Text>
                        Descripcion:{description}
                    </Card.Text>
                    <Card.Text>
                        Precio: {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}