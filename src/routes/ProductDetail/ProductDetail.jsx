import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { Row, Grid, Col, FormGroup, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import SellerProfileSmall from '../../components/seller-profile-small';
import StarsStat from '../../components/stars-stat';

class ProductDetail extends Component {
    productsRef = firebase.firestore().collection('/products').doc(this.props.match.params.id);

    constructor(props) {
        super(props);
        this.state = {
            product: {},
        };
    }

    async componentDidMount() {
        await this.getProduct();
    }

    getProduct = async () => {
        const productsSnapshot = await this.productsRef.get();
        const product = productsSnapshot.data();
        const sellerRef = await product.seller.get();
        const nextState = {
            ...product,
            seller: sellerRef.data(),
        };
        this.setState({ product: nextState });
    };

    render() {
        const { product } = this.state;
        if (!('name' in product)) {
            return <h3>Cargando...</h3>;
        } else {
            return (
                <Grid>
                    <Row>
                        <Col xs={2}>
                            <h3>Productor</h3>
                            <SellerProfileSmall seller={product.seller} />
                        </Col>
                        <Col xs={10}>
                            <Row>
                                <Col xs={5}>
                                    <img src={product.img} className="img-responsive" />
                                </Col>
                                <Col xs={7}>
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <StarsStat num={product.stars} />
                                    <h3>$ {product.price} / Kilo</h3>
                                    <Form inline>
                                        <FormGroup>
                                            <InputGroup>
                                                <FormControl
                                                    type="number"
                                                    min={0}
                                                    max={product.quantity}
                                                    style={{width: '100px'}}
                                                />
                                                <InputGroup.Addon>/ kilos</InputGroup.Addon>
                                            </InputGroup>
                                        </FormGroup>
                                        <Button bsStyle="success" style={{marginLeft: '1em'}}>
                                            <i className="fa fa-shopping-basket"/> Agregar ingrediente
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            );
        }
    }
}

export default ProductDetail;
