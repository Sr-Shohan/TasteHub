import React, { Component } from 'react'
import image from '../../assets/contact.svg'
import { Container, Row, Col } from 'reactstrap';
import './body.css'
export class Contact extends Component {
    render() {
        return (
            <div >
                <Container  >
                    <Row className='contact' >
                        <Col className='col' >
                            <img src={image} alt='alal' />
                        </Col>
                        <Col >
                            <img src={image} alt='alal' />
                        </Col>

                    </Row>
                </Container>

            </div>

        )
    }
}

export default Contact;