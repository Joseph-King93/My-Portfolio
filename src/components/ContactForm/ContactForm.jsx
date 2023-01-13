import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mzrckhg', 'template_fxtdltm', form.current, 'zuoTVAuTzpfuxzSt5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <Container className='text-start'>
                <Form ref={form} onSubmit={sendEmail}>
                    <Row style={{margin: 15}}>
                        <Col className="align-items-start">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><strong>Name</strong></Form.Label>
                                <Form.Control type="text" placeholder="Your Name Here" name="user_name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label><strong>Email address</strong></Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row style={{ margin: 15 }}>
                        <Col xs={12}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label><strong>Message Me!</strong></Form.Label>
                                <Form.Control as="textarea" rows={3} name="message"/>
                            </Form.Group>
                        </Col>
                        <Col xs={{ span: 3, offset: 9 }} className='align-items-start'>
                            <Button type="submit">
                                Send
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
};