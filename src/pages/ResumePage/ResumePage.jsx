import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';

export default function ResumePage() {
    return (
        <>
            <Container className='text-center' style={{ padding: 25 }}>
                <h1 className='text-center' style={{ color: "#7f8ea8" }}>
                    SURPRISE!
                </h1>
                <p className='text-center'>
                    Resume is found here on the Resume Page!
                    <br></br>
                    Want to download or view with active links?
                    <br></br>
                    Click <strong>The Button</strong> below!
                </p>
                <div className='text-center'>
                    <a href="https://docs.google.com/document/d/1GAf4ut0Uqr0nrMjIupur-LwVj2o2npgi1kQTGYJb2H0/edit?usp=sharing" target="_blank" rel="noreferrer">
                        <Button><strong >The Button</strong></Button>
                    </a>
                <p style={{fontSize: 12, marginTop: 20 }}>Too far...you passed the button</p>
                </div>
                <Row className='align-items-center'>
                    <Col>
                            <Image
                                rounded
                                fluid
                                src="/Joseph-King-Resume.PNG"
                            />
                    </Col>
                </Row>
            </Container>
        </>
    )
}