import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import { FileEarmarkArrowDown } from "react-bootstrap-icons";
import "./resumePage.css"


export default function ResumePage() {
    return (
        <>
            <Container className='text-center' style={{ padding: 25 }}>
                <h1 className='text-center' style={{ color: "#7f8ea8" }}>
                    My Resume
                </h1>               
                <p className='text-center'>
                    {/* Resume is found here on the Resume Page!
                    <br></br> */}
                    Need a copy? Download here!
                    <br></br>
                    {/* Click <strong>The Button</strong> below! */}
                </p>
                <div className='text-center'>
                    
                    <a href="https://drive.google.com/uc?export=download&id=1ysckbON15o9TIQnCmzrtvOhAfngvyjwE" download="Joseph-King-Resume">
                        <Button><strong >Download</strong><FileEarmarkArrowDown className='download-icon'/></Button>
                    </a>
                {/* <p style={{fontSize: 12, marginTop: 20 }}>Too far...you passed the button</p> */}
                </div>
                <br></br>
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