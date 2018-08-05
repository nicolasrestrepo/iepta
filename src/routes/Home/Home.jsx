import React, { Component } from 'react';
import { Grid, Col, Row, InputGroup, FormControl, FormGroup } from 'react-bootstrap';
import firebase from 'firebase';
import 'firebase/firestore';
import AppCard from '../../components/product-card';
import { Link } from 'react-router-dom';

class Home extends Component {
    catRef = firebase.firestore().collection('categories');
    productsRef = firebase.firestore().collection('/products');

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: [],
        };
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = async () => {
        const products = [];
        const cat = [];
        const productsSnapshot = await this.productsRef.get();
        productsSnapshot.forEach(product => products.push({ ...product.data(), id: product.id }));
        const categorySnap = await this.catRef.get();
        categorySnap.forEach(category => cat.push(category.data()));
        this.setState({ products, categories: cat });
    };

    handleClick = (id) => {
        this.props.history.push(`/product-detail/${id}`);
    };

    render() {
        const { products, categories } = this.state;
        return (
            <Grid>
                <Row>
                    <Col xs={2}>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>
                                    <i className="fa fa-search" />
                                </InputGroup.Addon>
                                <FormControl
                                    type="text"
                                    placeholder="Buscar ..."
                                />
                            </InputGroup>
                        </FormGroup>
                        <hr />
                        <ul className="list-unstyled">
                            <b>Categorias:</b>
                            {categories.map(cat => (<li key={cat.name}>
                                <Link to="#">{cat.name}</Link>
                            </li>))}
                        </ul>
                    </Col>
                    <Col xs={10}>
                        <Row>
                            {!products.lenght && products.map(product => (
                                <Col xs={4}
                                     onClick={() => this.handleClick(product.id)}
                                     key={product.id}>
                                    <AppCard
                                        product={product} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;