import { ContactUs } from "../../components/ContactForm/ContactForm"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'


export default function ContactPage() {
    return (
        <>
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1>Contact Me!</h1>
                    </Col>
                </Row>
            </Container>         
            <ContactUs />
            <Container style={{marginTop: 60}}>
                <Row className='text-center align-items-center'>
                    <Col>
                        <a href="https://github.com/Joseph-King93" target="_blank">
                            <Image
                                rounded
                                fluid
                                style={{ height: 50 }}
                                src="/github-mark.png"
                            />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.linkedin.com/in/joseph-king-se/" target="_blank">
                            <Image
                                rounded
                                fluid
                                style={{ height: 50 }}
                                src="/LI-In-Bug.png"
                            />
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}