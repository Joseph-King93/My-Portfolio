import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function AboutPage() {
    return (
        <>
            <div className='text-center'>
                <h1>Technology Stacks</h1>
            </div>
            <br></br>
            <div className='text-center'>
                <h3>MERN</h3>
            </div>
            <Container fluid>
                <Row className='align-items-start'>
                    <Col>
                        <Image src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" fluid />
                    </Col>
                    <Col>
                        <Image src="https://img.icons8.com/ios/250/null/express-js.png" fluid />
                    </Col>
                    <Col>
                        <Image src="https://img.icons8.com/plasticine/200/null/react.png" fluid />
                    </Col>
                    <Col>
                        <Image src="https://img.icons8.com/fluency/240/null/node-js.png" fluid />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Image src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png" fluid/>
                    </Col>
                    <Col>
                        <Image src="https://img.icons8.com/color/240/null/java-web-token.png" fluid/>
                    </Col>
                    <Col>
                        <Image src="https://oauth.net/images/oauth-logo-square.png" fluid/>
                    </Col>
                    <Col>
                        <Image src="https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png" fluid/>
                    </Col>
                    <Col>
                        <Image src="https://img.icons8.com/color/240/null/html-5--v1.png" fluid/>
                    </Col>
                    <Col>
                        <Image src="https://img.icons8.com/color/240/null/css3.png" fluid/>
                    </Col>
                    <Col>
                        <Image src="https://img.icons8.com/color/240/null/javascript--v1.png" fluid/>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <div className='text-center'>
                <h3>Django</h3>
            </div>
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col>
                        <Image src="https://img.icons8.com/ios/250/null/django.png" fluid />
                    </Col>
                    <Col></Col>
                </Row>
                <br></br>
                <Row>
                    <Col></Col>
                    <Col>
                        <Image src="https://img.icons8.com/color/240/null/postgreesql.png" fluid />
                    </Col>
                    <Col>
                        <Image src="https://img.icons8.com/fluency/144/null/python.png" fluid />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            
        </>
    )
}
