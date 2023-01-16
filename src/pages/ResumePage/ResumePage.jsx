import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';

export default function ResumePage() {
    return (
        <>
            <Container className='text-center' style={{ margin: 0, padding: 25 }}>
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
                    <a href="https://docs.google.com/document/d/1C0jQitn8GT9y1RPYY8Nd5bBMlQ_itzLf/edit?usp=sharing&ouid=114253510690230959510&rtpof=true&sd=true" target="_blank">
                        <Button><strong >The Button</strong></Button>
                    </a>
                <p style={{fontSize: 12, marginTop: 20 }}>Too far...you passed the button</p>
                </div>
                <Row className='align-items-center'>
                    <Col>
                            <Image
                                rounded
                                fluid
                                src="/J-King-Resume-1.PNG"
                            />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Image
                            rounded
                            fluid
                            src="/J-King-Resume-2.PNG"
                        />
                    </Col>

                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Image
                            rounded
                            fluid
                            src="/J-King-Resume-3.PNG"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}