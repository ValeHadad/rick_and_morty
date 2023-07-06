import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export default function CharacterCard({ id, name, status, species, gender, origin, image, onClose }) {
   return (
     <Card style={{ width: "18rem" }}>
       <Card.Img variant="top" src={image} alt={name} />
       <Card.Body>
         <Button className="close-btn" variant="danger" onClick={onClose}>
           X
         </Button>
         <Card.Title>{name}</Card.Title>
         <Card.Text>
           Species: {species}
           <br />
           Gender: {gender}
           <br />
           Status: {status}
           <br />
           Origin: {origin}
         </Card.Text>
         <Button variant="primary">Seleccionar</Button>
       </Card.Body>
     </Card>
   );
 }
 