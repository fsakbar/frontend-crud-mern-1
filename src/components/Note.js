import notesStore from "../store/notesStore"
import "../dist/css/main.css"
import {Container, Row, Col} from "react-bootstrap"
import Card from 'react-bootstrap/Card';

export default function Note({note}){
    const store = notesStore(store=>{
        return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate}

    });
    return(
        <Container>
            <Row>
                <Col>
                    <div key = {note._id}>
                        <div className="">
                            <Card className="card-note m-2 bg-secondary text-white">
                                <Card.Body>
                                    <Card.Title><h3>{note.title}</h3></Card.Title>
                                    <Card.Text>
                                    <h6>{note.body}</h6>
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                    <button onClick={() => store.deleteNote(note._id)}>Delete note</button>
                                    <button onClick={() => store.toggleUpdate(note)}>Update note</button>
                                </Card.Body>
                            </Card>    
                        </div>
                    </div>
                </Col>
            </Row>
      </Container>
    )
}