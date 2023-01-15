import './HomePage.css'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';

export default function HomePage () {
    return (
        <>
            <Container>
                <Row style={{marginTop: 150}}>
                    <Col xs={{span:4, offset: 2}}>
                        <Image 
                        fluid
                        className='profile-pic-radius'
                        src="/Profile-Pic.PNG"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                    <div className="justify-content-start">
                        <h1>Hello, World!</h1>
                        <h2>
                            My Name is <br></br>
                            <div className="home-name">
                            <strong>Joseph King</strong><br></br>
                            </div>
                            <strong>Full Stack Software Engineer</strong>
                        </h2>
                    </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}
