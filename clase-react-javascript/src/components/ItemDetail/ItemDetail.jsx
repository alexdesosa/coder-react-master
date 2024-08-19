import CardHeader from "react-bootstrap/esm/CardHeader";

const ItemDetail = ({ name, price, description, image, stock }) => {
  return (
    <Card className="text-center">
      <CardHeader>{name}</CardHeader>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>${price}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Stock {stock}</Card.Footer>
    </Card>
  );
};

export default ItemDetail;
