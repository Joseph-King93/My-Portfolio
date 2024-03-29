import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function AboutPage() {
    return (
        <>
            <div className='text-center'>
                <h1 style={{color: "#7f8ea8"}}>Technology Stacks</h1>
            </div>
            <br></br>
            <div className='text-center'>
                <h3 style={{color: "#7f8ea8"}}>MERN</h3>
                <p>I have experience working with Express only and Express + React projects! JSX, EJS, JWT, and Mongoose are among some of the langauages/tools I have used in projects! </p>
            </div>
            <Container fluid>
                <Row className='text-center align-items-center'>
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
                <br></br>
                <br></br>
                <Row md={7} className='text-center align-items-center'>
                    <Col xs={3} md={true}>
                        <Image src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png" fluid/>
                    </Col>
                    <Col xs={3} md={true}>
                        <Image src="https://img.icons8.com/color/240/null/java-web-token.png" fluid/>
                    </Col>
                    <Col xs={3} md={true}>
                        <Image src="https://oauth.net/images/oauth-logo-square.png" fluid/>
                    </Col>
                    <Col xs={3} md={true}>
                        <Image src="https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png" fluid/>
                    </Col>
                    <Col xs={4} md={true}>
                        <Image src="https://img.icons8.com/color/240/null/html-5--v1.png" fluid/>
                    </Col>
                    <Col xs={4} md={true}>
                        <Image src="https://img.icons8.com/color/240/null/css3.png" fluid/>
                    </Col>
                    <Col xs={4} md={true}>
                        <Image src="https://img.icons8.com/color/240/null/javascript--v1.png" fluid/>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <div className='text-center'>
                <h3 style={{color: "#7f8ea8"}}>Django</h3>
                <p>I have experience working on both front-end and back-end with Django! I've utilized PostgreSQL and Materialize CSS with Django and enjoy the customization and tools that come with Django!</p>
            </div>
            <Container fluid>
                <Row className='text-center align-items-center'>
                    <Col></Col>
                    <Col>
                        <Image src="https://img.icons8.com/ios/250/null/django.png" fluid />
                    </Col>
                    <Col></Col>
                </Row>
                <br></br>
                <Row className='text-center align-items-center'>
                    <Col></Col>
                    <Col>
                        <Image src="https://img.icons8.com/color/240/null/postgreesql.png" fluid />
                    </Col>
                    <Col>
                        <Image src="https://img.icons8.com/fluency/144/null/python.png" fluid />
                    </Col>
                    <Col>
                        <Image src="https://iconape.com/wp-content/png_logo_vector/materialize-logo.png" fluid />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            
        </>
    )
}
