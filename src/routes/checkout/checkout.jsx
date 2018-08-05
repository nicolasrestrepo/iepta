import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

function Checkout() {
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col xs={2}>
                            <figure>
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/iepta-2b826.appspot.com/o/besoDeNovia.png?alt=media&token=f452de57-17e5-4789-90ee-f36e22e41fc0"
                                    alt="asdf"
                                    className="img-responsive"
                                />
                            </figure>
                        </Col>
                        <Col xs={8}>
                            <h4>Beso de Novia</h4>
                            <p>$ 12500 / kilo</p>
                        </Col>
                        <Col xs={2}>
                            <h4>Total</h4>
                            <p>$ 125000</p>
                        </Col>
                    </Row>
                    <div className="clearfix"><br /></div>
                    <Row>
                        <Col xs={2}>
                            <figure>
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/iepta-2b826.appspot.com/o/criollaNegra.png?alt=media&token=2844486c-3521-450f-9416-5bf60513a57f"
                                    alt="asdf"
                                    className="img-responsive"
                                />
                            </figure>
                        </Col>
                        <Col xs={8}>
                            <h4>Criolla Negra</h4>
                            <p>$ 12500 / kilo</p>
                        </Col>
                        <Col xs={2}>
                            <h4>Total</h4>
                            <p>$ 125000</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    )
}

export default Checkout;