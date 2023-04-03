import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function ProjectsPage() {
    return (
        <>
            <Container className='text-center' style={{margin: 15, padding: 25}}>
                <Row className='align-items-center'>
                    <Col>
                        <Image 
                            rounded
                            fluid
                            src="/Network-Thumbnail.PNG"
                        />
                    </Col>
                    <Col>
                        <h1 style={{color: "#7f8ea8"}}>The Network</h1>
                        <p>This is a project delving into some of the concepts of social media such as user auth and post/comment relationships! This project utilizes MEN infrastructure + Bootstrap and EJS for styling and layout! </p>
                        <Row>
                            <Col md={6}>
                                <a href="https://social-media-express-only.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <Image
                                        rounded
                                        fluid
                                        style={{ height: 50 }}
                                        src="/built-on-heroku-light.svg"
                                        />
                                </a>
                                <p style={{ color: "#7f8ea8" }}><strong>Live App</strong></p>
                            </Col>
                            <Col>
                                <a href="https://github.com/Joseph-King93" target="_blank" rel="noreferrer">
                                    <Image
                                        rounded
                                        fluid
                                        style={{ height: 50 }}
                                        src="/github-mark.png"
                                        />
                                </a>
                                <p style={{ color: "#7f8ea8" }}><strong>Repo</strong></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row className='align-items-center'>
                    <Col>
                        <Image
                            xs={2}
                            rounded
                            fluid
                            src="/Business-Template-Thumbnail.PNG"
                        />
                    </Col>
                    <Col>
                        <h1 style={{color: "#7f8ea8"}}>Business Template</h1>
                        <p>A basic framework built completely with MERN + Bootstrap for small-business retailers, e-commerce, restaurant landing pages, and more! Template can easily be expanded upon for more product categories/items and is customizable to fit multiple industries!    </p>
                        <Row>
                            <Col md={6}>
                                <a href="https://ancient-sea-57311.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <Image
                                    rounded
                                    fluid
                                    style={{ height: 50 }}
                                    src="/built-on-heroku-light.svg"
                                    />
                                </a>
                                <p style={{ color: "#7f8ea8" }}><strong>Live App</strong></p>
                            </Col>
                            <Col>
                                <a href="https://github.com/Joseph-King93" target="_blank" rel="noreferrer">
                                    <Image
                                        rounded
                                        fluid
                                        style={{ height: 50 }}
                                        src="/github-mark.png"
                                        />
                                </a>
                                <p style={{ color: "#7f8ea8" }}><strong>Repo</strong></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row className='align-items-center'>
                    <Col>
                        <Image
                            rounded
                            fluid
                            src="Boolean-Fitness-Thumbnail.PNG"
                        />
                    </Col>
                    <Col>
                        <h1 style={{color: "#7f8ea8"}}>Boolean Fitness</h1>
                        <p>This is a fitness app developed using Django and Python! Comes loaded with features such as template authentication, user permission and grouping assignment, and various styling arrangements made possible with Materialize CSS!</p>
                        <Row>
                            <Col md={6}>
                                <a href="https://shrouded-retreat-81056.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <Image
                                        rounded
                                        fluid
                                        style={{ height: 50 }}
                                        src="/built-on-heroku-light.svg"
                                        />
                                </a>
                                <p style={{ color: "#7f8ea8" }}><strong>Live App</strong></p>
                            </Col>
                            <Col>
                            <a href="https://github.com/Joseph-King93" target="_blank" rel="noreferrer">
                                <Image
                                    rounded
                                    fluid
                                    style={{ height: 50 }}
                                    src="/github-mark.png"
                                />
                            </a>
                                <p style={{ color: "#7f8ea8" }}><strong>Repo</strong></p>
                        </Col>
                                    </Row>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row className='align-items-center'>
                    <Col>
                        <a href="https://joseph-king93.github.io/battleship/" target="_blank" rel="noreferrer">
                            <Image
                                rounded
                                fluid
                                src="/Combat-Dinghy-Thumbnail.PNG"
                            />
                        </a>
                    </Col>
                    <Col>
                        <h1 style={{color: "#7f8ea8"}}>Combat Dinghy</h1>
                        <p>This is a recreation of the classic game Battleship using only vanilla HTML, CSS, and JS!</p>
                        <Row>
                            <Col md={6}>
                                <a href="https://joseph-king93.github.io/battleship/" target="_blank" rel="noreferrer">
                                    <Image
                                        rounded
                                        fluid
                                        style={{ height: 50 }}
                                        src="/github-mark.png"
                                    />
                                </a>
                                <p style={{ color: "#7f8ea8" }}><strong>Live App</strong></p>
                            </Col>
                            <Col>
                                <a href="https://github.com/Joseph-King93" target="_blank" rel="noreferrer">
                                    <Image
                                        rounded
                                        fluid
                                        style={{ height: 50 }}
                                        src="/github-mark.png"
                                    />
                                </a>
                                <p style={{ color: "#7f8ea8" }}><strong>Repo</strong></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )
}